import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import UserAuthDto from './auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: UserAuthDto) {
    return await this.authService.login(loginData);
  }

  @Post('register')
  async register(@Body() registerData: UserAuthDto) {
    return await this.authService.register(registerData);
  }
}
