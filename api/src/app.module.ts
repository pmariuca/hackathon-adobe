import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/user.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { PostModule } from './api/posts/post.module';
import { AuthModule } from './api/auth/auth.module';
import { AuthController } from './api/auth/auth.controller';
import { AuthService } from './api/auth/auth.service';
import { PostController } from './api/posts/post.controller';
import { PostService } from './api/posts/post.service';

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
