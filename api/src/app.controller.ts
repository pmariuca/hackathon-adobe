import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  healthCheck() {
    return this.appService.healthCheck();
  }
}
