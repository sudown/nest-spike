import { Injectable } from '@nestjs/common';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { UpdatePatenteDto } from './dto/update-patente.dto';
import { PatentesRepository } from 'src/repositories/patentes.repository';
import { Patente as PrismaPatente } from '@prisma/client';
import { Patente } from './entities/patente.entity';

@Injectable()
export class PatentesService {
  constructor(private patentesRepository: PatentesRepository) {}

  create(createPatenteDto: CreatePatenteDto): Promise<PrismaPatente> {
    const patente = new Patente(createPatenteDto);
    console.log(patente);

    return this.patentesRepository.create(patente);
  }

  findAll(): Promise<PrismaPatente[]> {
    return this.patentesRepository.findAll();
  }

  findOne(Id: number): Promise<PrismaPatente | null> {
    return this.patentesRepository.findOne(Id);
  }

  update(
    Id: number,
    updatePatenteDto: UpdatePatenteDto,
  ): Promise<PrismaPatente> {
    return this.patentesRepository.update(Id, updatePatenteDto);
  }

  remove(Id: number): Promise<PrismaPatente> {
    return this.patentesRepository.delete(Id);
  }
}
