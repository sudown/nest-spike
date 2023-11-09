import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './helpers/logger.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { PatentesModule } from './patentes/patentes.module';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    LoggerModule,
    PessoasModule,
    PatentesModule,
    AuthModule,
    CursosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
