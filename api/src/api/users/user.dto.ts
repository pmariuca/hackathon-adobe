import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class UserAuthData {
  @ApiProperty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsStrongPassword()
  readonly password: string;
}
