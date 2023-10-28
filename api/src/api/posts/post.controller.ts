import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { AuthGuard } from '../auth/auth.guard';
import CreatePostDto from './dto/create-post.dto';
import UpdatePostDto from './dto/update-post.dto';
import { RequestWithUser } from '../../interfaces/auth.interface';

@ApiTags('Posts')
@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('posts')
  async getPosts() {
    return await this.postService.getPosts();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('posts/:id')
  async getPost(id: string) {
    return await this.postService.getPostById(Number(id));
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post('posts')
  async createPost(@Req() req: RequestWithUser, @Body() data: CreatePostDto) {
    return await this.postService.createPost(Number(req.user.id), data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch('posts/:id')
  async updatePost(
    @Req() req: RequestWithUser,
    @Body() data: UpdatePostDto,
    @Param('id') id: string,
  ) {
    return await this.postService.updatePost(
      Number(req.user.id),
      Number(id),
      data,
    );
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete('posts/:id')
  async deletePost(@Req() req: RequestWithUser, id: string) {
    return await this.postService.deletePost(Number(req.user.id), Number(id));
  }
}
