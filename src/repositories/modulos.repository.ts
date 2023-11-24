import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Modulo, Prisma } from '@prisma/client';

@Injectable()
export class ModuloRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ModuloCreateInput): Promise<Modulo> {
    return this.prisma.modulo.create({
      data,
    });
  }

  async findAll(): Promise<Modulo[]> {
    return this.prisma.modulo.findMany();
  }

  async findOne(Id: number): Promise<Modulo | null> {
    return this.prisma.modulo.findUnique({
      where: {
        Id: Id,
      },
    });
  }

  async getModulosByCursoId(fkCursoId: number): Promise<Modulo[]> {
    return this.prisma.modulo.findMany({
      where: { fkCursoId },
    });
  }

  async update(Id: number, data: Prisma.ModuloUpdateInput) {
    return this.prisma.modulo.update({
      where: { Id },
      data,
    });
  }

  async delete(Id: number): Promise<Modulo> {
    return this.prisma.modulo.delete({
      where: { Id },
    });
  }
}
