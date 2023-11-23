import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { PrismaService } from 'src/prisma.service';
import { AulasRepository } from 'src/repositories/aulas.repository';

@Module({
  controllers: [AulasController],
  providers: [AulasService, AulasRepository, PrismaService],
})
export class AulasModule {}
