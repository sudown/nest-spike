import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { MyLogger } from './log/my-logger.service';

@Module({
  imports: [UsersModule, PostModule, MyLogger],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
