import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { PrismaService } from 'src/prisma.service';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import { CursosRepository } from 'src/repositories/cursos.repository';

@Module({
  controllers: [AulasController],
  providers: [
    AulasService,
    AulasRepository,
    PrismaService,
    ModuloRepository,
    CursosRepository,
  ],
})
export class AulasModule {}
