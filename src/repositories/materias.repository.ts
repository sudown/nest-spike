import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Materiais } from '@prisma/client';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MateriasRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MateriaisCreateInput): Promise<Materiais> {
    return this.prisma.materiais.create({ data });
  }

  async findAll(): Promise<Materiais[]> {
    return this.prisma.materiais.findMany();
  }

  async findOne(Id: number): Promise<Materiais | null> {
    return this.prisma.materiais.findUnique({
      where: { Id },
    });
  }

  async update(Id: number, data: Prisma.MateriaisUpdateInput) {
    return this.prisma.materiais.update({
      where: { Id },
      data,
    });
  }

  async delete(Id: number): Promise<Materiais> {
    return this.prisma.materiais.delete({
      where: { Id },
    });
  }

  async getMateriaisByAulaId(fk_aula_id: number): Promise<Materiais[]> {
    return this.prisma.materiais.findMany({
      where: { fk_Aula_Id: fk_aula_id },
    });
  }
}
