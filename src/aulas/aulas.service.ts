import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { UpdateAulaDto } from './dto/update-aula.dto';
import { Prisma } from '@prisma/client';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import winston from 'winston';

@Injectable()
export class AulasService {
  constructor(
    private aulasRepository: AulasRepository,
    private modulosRepository: ModuloRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(createAulaDto: Prisma.AulaCreateInput) {
    const modulo = await this.modulosRepository.findOne(
      createAulaDto.modulo.connect.Id,
    );
    if (!modulo) {
      throw new NotFoundException(
        `Módulo com Id ${createAulaDto.modulo.connect.Id} não encontrado`,
      );
    }
    return this.aulasRepository.create(createAulaDto);
  }

  // findAll() {
  //   return `This action returns all aulas`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} aula`;
  // }

  // update(id: number, updateAulaDto: UpdateAulaDto) {
  //   return `This action updates a #${id} aula`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} aula`;
  // }
}
