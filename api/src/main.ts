import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { ValidationPipe } from '@nestjs/common';
import setupSwagger from './swagger';
import { setupMail } from './mail';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);
  setupMail();
  await app.listen(3000);
}
bootstrap();
