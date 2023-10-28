import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { prisma } from 'src/prisma';
import UserAuthDto from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(data: UserAuthDto) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      return new HttpException('Invalid login', 401);
    }
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      return new HttpException('Invalid login', 401);
    }
    const payload = { id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(data: UserAuthDto) {
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
