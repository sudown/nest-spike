import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './helpers/logger.module';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [LoggerModule, PessoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
