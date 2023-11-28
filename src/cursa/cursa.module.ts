import { Module } from '@nestjs/common';
import { CursaService } from './cursa.service';
import { CursaController } from './cursa.controller';
import { CursaRepository } from 'src/repositories/cursoProgresso.repository';
import { PrismaService } from 'src/prisma.service';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { CursosRepository } from 'src/repositories/cursos.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';

@Module({
  controllers: [CursaController],
  providers: [
    CursaService,
    CursaService,
    CursaRepository,
    PrismaService,
    AulasRepository,
    CursosRepository,
    ModuloRepository,
  ],
})
export class CursaModule {}
