import { HttpException, Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma';
import CreatePostDto from './dto/create-post.dto';
import UpdatePostDto from './dto/update-post.dto';

@Injectable()
export class PostService {
  async getPosts() {
    const posts = await prisma.post.findMany();
    return await Promise.all(
      posts.map(async (post) => ({
        ...post,
        author: (
          await prisma.user.findUnique({
            where: { id: post.authorId },
            select: { email: true },
          })
        ).email,
      })),
    );
  }

  async getPostById(id: number) {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return {
      post: {
        ...post,
        author: (
          await prisma.user.findUnique({
            where: { id: post.authorId },
            select: { email: true },
          })
        ).email,
      },
    };
  }

  async createPost(userId: number, data: CreatePostDto) {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published ?? false,
        authorId: userId,
      },
    });
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    await prisma.user.update({
      where: { id: user.id },
      data: {
        points: user.points + 1,
      },
    });
    return post;
  }

  async updatePost(userId: number, postId: number, data: UpdatePostDto) {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (!post) {
      throw new HttpException('Post not found', 404);
    }
    if (post.authorId !== userId) {
      throw new HttpException('Unauthorized', 401);
    }
    try {
      const post = await prisma.post.update({
        where: { id: postId },
        data: {
          title: data.title,
          content: data.content,
          published: data.published,
        },
      });
      return { post };
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async deletePost(userId: number, postId: number) {
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (!post) {
      throw new HttpException('Post not found', 404);
    }
    if (post.authorId !== userId) {
      throw new HttpException('Unauthorized', 401);
    }
    await prisma.post.delete({
      where: { id: postId },
    });
    return { message: 'Post deleted' };
  }
}
