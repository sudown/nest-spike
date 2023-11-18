import { Module } from '@nestjs/common';
import { CursaService } from './cursa.service';
import { CursaController } from './cursa.controller';
import { CursaRepository } from 'src/repositories/cursa.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CursaController],
  providers: [CursaService, CursaService, CursaRepository, PrismaService],
})
export class CursaModule {}
