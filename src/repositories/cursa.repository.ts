import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cursa, Prisma } from '@prisma/client';

@Injectable()
export class CursaRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CursaCreateInput): Promise<Cursa> {
    return this.prisma.cursa.create({ data });
  }

  async update(Id: number, data: Prisma.CursaUpdateInput): Promise<Cursa> {
    return this.prisma.cursa.update({
      where: { Id },
      data,
    });
  }

  async findAll(): Promise<Cursa[]> {
    return this.prisma.cursa.findMany();
  }

  async findOne(Id: number): Promise<Cursa> {
    return this.prisma.cursa.findFirst({
      where: { Id },
    });
  }

  async findByPessoaId(PessoaId: number): Promise<Cursa[]> {
    return this.prisma.cursa.findMany({
      where: { fk_Pessoa_Id: PessoaId },
    });
  }

  async findByPessoaIdAndCursoId(
    PessoaId: number,
    CursoId: number,
  ): Promise<Cursa[]> {
    return this.prisma.cursa.findMany({
      where: { fk_Pessoa_Id: PessoaId, fk_Curso_Id: CursoId },
    });
  }

  async delete(Id: number): Promise<Cursa> {
    return this.prisma.cursa.delete({
      where: { Id },
    });
  }

  async deleteByPessoaIdAndCursoId(
    PessoaId: number,
    CursoId: number,
  ): Promise<Cursa> {
    const curso = await this.findByPessoaIdAndCursoId(PessoaId, CursoId);
    return this.prisma.cursa.delete({
      where: { Id: curso[0].Id },
    });
  }
}
