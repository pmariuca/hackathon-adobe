import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users/:id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async getUser(@Param('id') id: string) {
    return await this.userService.findOneById(Number(id));
  }

  @Get('/users')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  async getUsers() {
    return await this.userService.findAllUsers();
  }
}
