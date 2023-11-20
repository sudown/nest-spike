import { Module } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { ModulosController } from './modulos.controller';
import { ModuloRepository } from 'src/repositories/modulo.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ModulosController],
  providers: [ModulosService, ModuloRepository, PrismaService],
})
export class ModulosModule {}
