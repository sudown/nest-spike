import { Injectable } from '@nestjs/common';
import { CursaRepository } from 'src/repositories/cursa.repository';
import { Cursa, Prisma } from '@prisma/client';

@Injectable()
export class CursaService {
  constructor(private cursaRepository: CursaRepository) {}

  async create(data: Prisma.CursaCreateInput): Promise<Cursa> {
    return this.cursaRepository.create(data);
  }

  async update(Id: number, data: Prisma.CursaUpdateInput): Promise<Cursa> {
    return this.cursaRepository.update(Id, data);
  }

  async findAll(): Promise<Cursa[]> {
    return this.cursaRepository.findAll();
  }

  async findOne(Id: number): Promise<Cursa> {
    return this.cursaRepository.findOne(Id);
  }

  async remove(Id: number): Promise<Cursa> {
    return this.cursaRepository.delete(Id);
  }
}
