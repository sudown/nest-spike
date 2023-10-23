import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { PessoasRepository } from 'src/repositories/pessoa.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PessoasController],
  providers: [PessoasService, PrismaService, PessoasRepository],
})
export class PessoasModule {}
