import { Module } from '@nestjs/common';
import { InsigniaService } from './insignias.service';
import { InsigniaController } from './insignias.controller';
import { InsigniaRepository } from 'src/prisma/repositories/insignia.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InsigniaController],
  providers: [InsigniaService, PrismaService, InsigniaRepository],
})
export class InsigniasModule {}
