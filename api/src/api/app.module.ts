import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { PostModule } from './posts/post.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PostController } from './posts/post.controller';
import { PostService } from './posts/post.service';

@Module({
  imports: [UsersModule, AuthModule, PostModule],
  controllers: [AppController, AuthController, PostController],
  providers: [AppService, AuthService, PostService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
