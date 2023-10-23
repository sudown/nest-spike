import { Injectable } from '@nestjs/common';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { UpdatePatenteDto } from './dto/update-patente.dto';
import { PatentesRepository } from 'src/repositories/patentes.repository';
import { Patente } from '@prisma/client';

@Injectable()
export class PatentesService {
  constructor(private patentesRepository: PatentesRepository) {}

  create(createPatenteDto: CreatePatenteDto): Promise<Patente> {
    return this.patentesRepository.create(createPatenteDto);
  }

  findAll(): Promise<Patente[]> {
    return this.patentesRepository.findAll();
  }

  findOne(Id: number): Promise<Patente | null> {
    return this.patentesRepository.findOne(Id);
  }

  update(Id: number, updatePatenteDto: UpdatePatenteDto): Promise<Patente> {
    return this.patentesRepository.update(Id, updatePatenteDto);
  }

  remove(Id: number): Promise<Patente> {
    return this.patentesRepository.delete(Id);
  }
}
