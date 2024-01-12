import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';
import { Patente } from 'src/patentes/entities/patente.entity';
import { PrismaPatenteMapper } from 'src/prisma/mappers/prisma-patente-mapper';

interface IPatentesRepository {
  create(data: Prisma.PatenteCreateInput): Promise<Patente>;
  findAll(): Promise<Patente[]>;
  findOne(Id: number): Promise<Patente | null>;
  update(Id: number, data: Prisma.PatenteUpdateInput): Promise<Patente>;
  delete(Id: number): Promise<Patente>;
}

@Injectable()
export class PatentesRepository implements IPatentesRepository {
  constructor(private prisma: PrismaService) {}

  async create(patente: Patente): Promise<Patente> {
    const raw = PrismaPatenteMapper.toPersistence(patente);
    const response = await this.prisma.patente.create({
      data: raw,
    });

    return PrismaPatenteMapper.toDomain(response);
  }

  async findAll(): Promise<Patente[]> {
    const patentes = await this.prisma.patente.findMany();

    return patentes.map(PrismaPatenteMapper.toDomain);
  }

  async findOne(Id: number): Promise<Patente> {
    const patente = await this.prisma.patente.findFirst({
      where: { Id },
    });

    if (!patente) {
      throw new Error('Patente não encontrada');
    }

    return PrismaPatenteMapper.toDomain(patente);
  }

  async update(Id: number, patente: Patente): Promise<Patente> {
    const raw = PrismaPatenteMapper.toPersistence(patente);
    const response = await this.prisma.patente.update({
      where: { Id },
      data: raw,
    });

    return PrismaPatenteMapper.toDomain(response);
  }

  async delete(Id: number): Promise<Patente> {
    const response = await this.prisma.patente.delete({
      where: {
        Id,
      },
    });
    return PrismaPatenteMapper.toDomain(response);
  }
}
