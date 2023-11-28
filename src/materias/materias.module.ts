import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import { MateriasRepository } from 'src/repositories/materias.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MateriasController],
  providers: [
    MateriasService,
    MateriasService,
    MateriasRepository,
    PrismaService,
  ],
})
export class MateriasModule {}
