import { Inject, Injectable } from '@nestjs/common';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { Prisma } from '@prisma/client';
import { AulasRepository } from 'src/repositories/aulas.repository';
import winston from 'winston';

@Injectable()
export class AulasService {
  constructor(
    private aulasRepository: AulasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(createAulaDto: Prisma.AulaCreateInput) {
    return this.aulasRepository.create(createAulaDto);
  }

  findAll() {
    return `This action returns all aulas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aula`;
  }

  update(id: number, updateAulaDto: UpdateAulaDto) {
    return `This action updates a #${id} aula`;
  }

  remove(id: number) {
    return `This action removes a #${id} aula`;
  }
}
