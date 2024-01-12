import { Module } from '@nestjs/common';
import { PatentesService } from './patentes.service';
import { PatentesController } from './patentes.controller';
import { PrismaService } from 'src/prisma.service';
import { PatentesRepository } from 'src/prisma/repositories/patentes.repository';

@Module({
  controllers: [PatentesController],
  providers: [PatentesService, PrismaService, PatentesRepository],
})
export class PatentesModule {}
