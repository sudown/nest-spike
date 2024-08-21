import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './helpers/logger.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { PatentesModule } from './patentes/patentes.module';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';
import { CursaModule } from './cursa/cursa.module';
import { ModulosModule } from './modulos/modulos.module';
import { AulasModule } from './aulas/aulas.module';
import { MateriasModule } from './materias/materias.module';
import { InsigniasModule } from './insignias/insignias.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    LoggerModule,
    PessoasModule,
    PatentesModule,
    AuthModule,
    CursosModule,
    CursaModule,
    ModulosModule,
    AulasModule,
    MateriasModule,
    InsigniasModule,
    FeedbacksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 6000,
      limit: 100,
    }]),
  ]
})
export class AppModule {}
