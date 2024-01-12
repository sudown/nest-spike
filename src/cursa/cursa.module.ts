import { Module } from '@nestjs/common';
import { CursaService } from './cursa.service';
import { CursaController } from './cursa.controller';
import { CursaRepository } from 'src/prisma/repositories/cursoProgresso.repository';
import { PrismaService } from 'src/prisma.service';
import { AulasRepository } from 'src/prisma/repositories/aulas.repository';
import { CursosRepository } from 'src/prisma/repositories/cursos.repository';
import { ModuloRepository } from 'src/prisma/repositories/modulos.repository';

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
