import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Curso, Prisma } from '@prisma/client';

@Injectable()
export class CursosRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CursoCreateInput): Promise<Curso> {
    return this.prisma.curso.create({ data });
  }

  async update(Id: number, data: Prisma.CursoUpdateInput): Promise<Curso> {
    return this.prisma.curso.update({
      where: { Id },
      data,
    });
  }

  async findAll(): Promise<Curso[]> {
    return this.prisma.curso.findMany();
  }

  async findOne(Id: number): Promise<Curso | null> {
    return this.prisma.curso.findUnique({
      where: { Id },
    });
  }

  async delete(Id: number): Promise<Curso> {
    return await this.prisma.curso.delete({
      where: { Id },
    });
  }
}
