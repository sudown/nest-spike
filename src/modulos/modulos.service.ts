import { Inject, Injectable } from '@nestjs/common';
// import { CreateModuloDto } from './dto/create-modulo.dto';
// import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Prisma } from '@prisma/client';
import { ModuloRepository } from 'src/repositories/modulo.repository';
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

  // findAll() {
  //   return `This action returns all modulos`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} modulo`;
  // }

  // update(id: number, updateModuloDto: UpdateModuloDto) {
  //   return `This action updates a #${id} modulo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} modulo`;
  // }
}
