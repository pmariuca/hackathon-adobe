import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { prisma } from 'src/prisma';
import UserAuthDto from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import ForgotPasswordDto from './dto/forgot-password.dto';
import { transporter } from 'src/mail';
import { uuid } from 'uuidv4';
import ChangePasswordDto from './dto/change-password.dto';

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
      throw new HttpException('Invalid login', 401);
    }
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) {
      throw new HttpException('Invalid login', 401);
    }
    const payload = { id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(data: UserAuthDto) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (user) {
      throw new HttpException('User already exists', 409);
    }
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

  async initiateResetPassword(data: ForgotPasswordDto) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new HttpException('Invalid email', 401);
    }
    const id = uuid();
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetToken: id,
      },
    });
    transporter.sendMail({
      to: user.email,
      subject: 'Reset password for your account',
      text: 'Reset password',
      html: `Hello! \n Click <b><a href="http://localhost:5173/change-password/${id}">this</a></b> to reset your password!`,
    });
    return {
      message: 'Email sent',
    };
  }

  async changePassword({ token, password }: ChangePasswordDto) {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
      },
    });
    if (!user) {
      throw new HttpException('Invalid token', 401);
    }
    if (user.resetToken !== token) {
      throw new HttpException('Invalid token', 401);
    }
    const hash = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hash,
        resetToken: null,
      },
    });
    return {
      message: 'Password changed',
    };
  }

  async getMyProfile(userId: number) {
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        email: true,
        posts: true,
        points: true,
      },
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return {
      user,
    };
  }
}
