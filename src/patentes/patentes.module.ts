import { Module } from '@nestjs/common';
import { PatentesService } from './patentes.service';
import { PatentesController } from './patentes.controller';
import { PrismaService } from 'src/prisma.service';
import { PatentesRepository } from 'src/repositories/patentes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Patente, PatenteSchema } from './schemas/patente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patente.name, schema: PatenteSchema }]),
  ],
  controllers: [PatentesController],
  providers: [PatentesService, PrismaService, PatentesRepository],
})
export class PatentesModule {}
