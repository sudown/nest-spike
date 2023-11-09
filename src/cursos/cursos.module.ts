import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { CursosRepository } from 'src/repositories/cursos.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService, PrismaService, CursosRepository],
})
export class CursosModule {}
