import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  async findOneById(id: number): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      id: user.id,
      email: user.email,
    };
  }
}
