import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { CursosRepository } from 'src/repositories/cursos.repository';
import { PrismaService } from 'src/prisma.service';
import { CursaRepository } from 'src/repositories/cursoProgresso.repository';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';

@Module({
  controllers: [CursosController],
  providers: [
    CursosService,
    PrismaService,
    CursosRepository,
    CursaRepository,
    AulasRepository,
    ModuloRepository,
  ],
})
export class CursosModule {}
