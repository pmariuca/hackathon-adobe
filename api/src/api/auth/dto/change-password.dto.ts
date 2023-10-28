import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword, IsUUID } from 'class-validator';

export default class ChangePasswordDto {
  @ApiProperty()
  @IsUUID()
  readonly token: string;

  @ApiProperty()
  @IsStrongPassword()
  readonly password: string;
}
