import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Patente, Prisma } from '@prisma/client';

@Injectable()
export class PatentesRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PatenteCreateInput): Promise<Patente> {
    return this.prisma.patente.create({
      data,
    });
  }

  async findAll(): Promise<Patente[]> {
    return this.prisma.patente.findMany();
  }

  async findOne(Id: number): Promise<Patente> {
    return this.prisma.patente.findFirst({
      where: { Id },
    });
  }

  async update(Id: number, data: Prisma.PatenteUpdateInput): Promise<Patente> {
    return this.prisma.patente.update({
      where: { Id },
      data,
    });
  }

  async delete(Id: number): Promise<Patente> {
    return this.prisma.patente.delete({
      where: {
        Id,
      },
    });
  }
}
