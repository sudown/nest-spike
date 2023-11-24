import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { UpdateAulaDto } from './dto/update-aula.dto';
// import { Prisma } from '@prisma/client';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import winston from 'winston';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';

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

  findAll() {
    return this.aulasRepository.findAll();
  }

  findOne(id: number) {
    return this.aulasRepository.findOne(id);
  }

  async getAulasByModuloId(fk_modulo_id: number) {
    const modulo = await this.modulosRepository.findOne(fk_modulo_id);
    if (!modulo) {
      throw new NotFoundException(
        `Módulo com Id ${fk_modulo_id} não encontrado`,
      );
    }
    const aulas = await this.aulasRepository.getAulasByModuloId(fk_modulo_id);
    if (!aulas) {
      throw new 
    }
  }

  async update(Id: number, data: UpdateAulaDto) {
    const aula = await this.aulasRepository.findOne(Id);
    const modulo = await this.modulosRepository.findOne(data.fk_modulo_id);

    if (!aula) {
      throw new NotFoundException(`Aula com Id ${Id} não encontrada`);
    }
    if (!modulo) {
      throw new NotFoundException(
        `Módulo com Id ${data.fk_modulo_id} não encontrado`,
      );
    }
    return this.aulasRepository.update(Id, data);
  }

  async remove(Id: number) {
    const aula = await this.aulasRepository.findOne(Id);
    if (!aula) {
      throw new NotFoundException(`Aula com Id ${Id} não encontrada`);
    }
    return this.aulasRepository.delete(Id);
  }
}
