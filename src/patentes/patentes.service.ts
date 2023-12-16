import { Injectable } from '@nestjs/common';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { UpdatePatenteDto } from './dto/update-patente.dto';
import { PatentesRepository } from 'src/repositories/patentes.repository';
import { Patente } from '@prisma/client';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Patente as PatenteMG,
  PatenteDocument,
} from './schemas/patente.schema';
@Injectable()
export class PatentesService {
  constructor(
    @InjectModel(PatenteMG.name)
    private patenteModel: Model<PatenteDocument>, // private patentesRepository: PatentesRepository,
  ) {}

  async create(createPatenteDto: CreatePatenteDto): Promise<PatenteMG> {
    const createdPatente = new this.patenteModel(createPatenteDto);
    return createdPatente.save();
  }

  // create(createPatenteDto: CreatePatenteDto): Promise<Patente> {
  //   return this.patentesRepository.create(createPatenteDto);
  // }

  // findAll(): Promise<Patente[]> {
  //   return this.patentesRepository.findAll();
  // }

  // findOne(Id: number): Promise<Patente | null> {
  //   return this.patentesRepository.findOne(Id);
  // }

  // update(Id: number, updatePatenteDto: UpdatePatenteDto): Promise<Patente> {
  //   return this.patentesRepository.update(Id, updatePatenteDto);
  // }

  // remove(Id: number): Promise<Patente> {
  //   return this.patentesRepository.delete(Id);
  // }
}
