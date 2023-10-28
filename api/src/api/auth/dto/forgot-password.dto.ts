import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export default class ForgotPasswordDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;
}
