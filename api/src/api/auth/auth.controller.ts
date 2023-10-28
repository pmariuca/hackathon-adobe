import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import UserAuthDto from './dto/auth.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import ForgotPasswordDto from './dto/forgot-password.dto';
import { RequestWithUser } from 'src/interfaces/auth.interface';
import { AuthGuard } from './auth.guard';
import ChangePasswordDto from './dto/change-password.dto';

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

  @Post('change-password')
  async chanePassword(@Body() changePasswordData: ChangePasswordDto) {
    return await this.authService.changePassword(changePasswordData);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('my-profile')
  async getMyProfile(@Req() req: RequestWithUser) {
    return await this.authService.getMyProfile(Number(req.user.id));
  }
}
