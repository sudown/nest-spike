import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Aula } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AulasRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AulaCreateInput): Promise<Aula> {
    return this.prisma.aula.create({ data });
  }

  async findAll(): Promise<Aula[]> {
    return this.prisma.aula.findMany();
  }

  async findOne(Id: number): Promise<Aula | null> {
    return this.prisma.aula.findUnique({
      where: { Id },
    });
  }

  async getAulasByModuloId(fk_modulo_id: number): Promise<Aula[]> {
    return this.prisma.aula.findMany({
      where: { fk_modulo_id },
    });
  }

  async update(Id: number, data: Prisma.AulaUpdateInput) {
    return this.prisma.aula.update({
      where: { Id },
      data,
    });
  }

  async delete(Id: number): Promise<Aula> {
    return this.prisma.aula.delete({
      where: { Id },
    });
  }
}
