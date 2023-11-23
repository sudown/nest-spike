import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { UpdateAulaDto } from './dto/update-aula.dto';
// import { Prisma } from '@prisma/client';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import winston from 'winston';
import { CreateAulaDto } from './dto/create-aula.dto';

@Injectable()
export class AulasService {
  constructor(
    private aulasRepository: AulasRepository,
    private modulosRepository: ModuloRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(createAulaDto: CreateAulaDto) {
    const modulo = await this.modulosRepository.findOne(
      createAulaDto.fk_modulo_id,
    );
    if (!modulo) {
      throw new NotFoundException(
        `Módulo com Id ${createAulaDto.fk_modulo_id} não encontrado`,
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fk_modulo_id, ...dataWithoutFkModuloId } = createAulaDto;

    const data = {
      ...dataWithoutFkModuloId,
      modulo: { connect: { Id: createAulaDto.fk_modulo_id } },
    };
    return this.aulasRepository.create(data);
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
