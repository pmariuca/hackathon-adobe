import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import UserAuthDto from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import ForgotPasswordDto from './dto/forgot-password.dto';
import { RequestWithUser } from 'src/interfaces/auth.interface';
import changePasswordDto from './dto/change-password.dto';

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

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordData: ForgotPasswordDto) {
    return await this.authService.initiateResetPassword(resetPasswordData);
  }

  @Post('forgot-password')
  async forgotPassword(
    @Req() req: RequestWithUser,
    @Body() changePasswordData: changePasswordDto,
  ) {
    return await this.authService.changePassword(
      Number(req.user.id),
      changePasswordData,
    );
  }
}
