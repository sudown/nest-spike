import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { CreateModuloDto } from './dto/create-modulo.dto';
// import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Prisma } from '@prisma/client';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import winston from 'winston';

@Injectable()
export class ModulosService {
  constructor(
    private modulosRepository: ModuloRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}
  create(createModuloDto: Prisma.ModuloCreateInput) {
    return this.modulosRepository.create(createModuloDto);
  }

  findAll() {
    return this.modulosRepository.findAll();
  }

  findOne(id: number) {
    return this.modulosRepository.findOne(id);
  }

  getModulosByCursoId(fkCursoId: number) {
    return this.modulosRepository.getModulosByCursoId(fkCursoId);
  }

  async update(Id: number, updateModuloDto: Prisma.ModuloUpdateInput) {
    try {
      const modulo = await this.modulosRepository.findOne(Id);
      if (!modulo) {
        throw new NotFoundException(`Módulo com Id ${Id} não encontrado`);
      }
      return this.modulosRepository.update(Id, updateModuloDto);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} modulo`;
  // }
}
