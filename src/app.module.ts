import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { LoggerModule } from './helpers/loggerModule';

@Module({
  imports: [UsersModule, PostModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
