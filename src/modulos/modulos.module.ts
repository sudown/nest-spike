import { Module } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { ModulosController } from './modulos.controller';
import { ModuloRepository } from 'src/prisma/repositories/modulos.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ModulosController],
  providers: [ModulosService, ModuloRepository, PrismaService],
})
export class ModulosModule {}
