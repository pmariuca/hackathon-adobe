import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { prisma } from 'src/prisma';
import { UserAuthData } from './user.dto';

@Injectable()
export class UserService {
  async login(data: UserAuthData) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new HttpException('Invalid login', 401);
    }
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      throw new HttpException('Invalid login', 401);
    }
    return {
      message: 'Login successful',
    };
  }

  async register(data: UserAuthData) {
    const hash = await bcrypt.hash(data.password, 10);
    await prisma.user.create({
      data: {
        email: data.email,
        password: hash,
      },
    });
    return {
      message: 'User created',
    };
  }
}
