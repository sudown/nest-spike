import { Injectable } from '@nestjs/common';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { UpdatePatenteDto } from './dto/update-patente.dto';
import { PatentesRepository } from 'src/prisma/repositories/patentes.repository';
import { Patente } from './entities/patente.entity';

@Injectable()
export class PatentesService {
  constructor(private patentesRepository: PatentesRepository) {}

  create(createPatenteDto: CreatePatenteDto): Promise<Patente> {
    const patente = new Patente(createPatenteDto);
    console.log(patente);

    return this.patentesRepository.create(patente);
  }

  findAll(): Promise<Patente[]> {
    return this.patentesRepository.findAll();
  }

  findOne(Id: number): Promise<Patente | null> {
    return this.patentesRepository.findOne(Id);
  }

  update(Id: number, updatePatenteDto: UpdatePatenteDto): Promise<Patente> {
    const patente = new Patente(updatePatenteDto);
    return this.patentesRepository.update(Id, patente);
  }

  remove(Id: number): Promise<Patente> {
    return this.patentesRepository.delete(Id);
  }
}
