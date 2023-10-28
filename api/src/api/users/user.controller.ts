import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAuthData } from './user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginData: UserAuthData) {
    return await this.userService.login(loginData);
  }

  @Post('register')
  async register(@Body() registerData: UserAuthData) {
    return await this.userService.register(registerData);
  }
}
