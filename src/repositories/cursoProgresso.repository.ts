import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CursoProgresso, Prisma } from '@prisma/client';

@Injectable()
export class CursaRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.CursoProgressoCreateInput,
  ): Promise<CursoProgresso> {
    return this.prisma.cursoProgresso.create({ data });
  }

  async update(
    IdCurso: number,
    IdPessoa: number,
    data: Prisma.CursoProgressoUpdateInput,
  ): Promise<CursoProgresso> {
    return this.prisma.cursoProgresso.update({
      where: {
        idCurso_idPessoa: {
          idCurso: IdCurso,
          idPessoa: IdPessoa,
        },
      },
      data,
    });
  }

  async findAll(): Promise<CursoProgresso[]> {
    return this.prisma.cursoProgresso.findMany();
  }

  async findOne(idCurso: number, idPessoa: number): Promise<CursoProgresso> {
    return this.prisma.cursoProgresso.findFirst({
      where: { idCurso, idPessoa },
    });
  }

  async findCursosByPessoaId(PessoaId: number): Promise<CursoProgresso[]> {
    return this.prisma.cursoProgresso.findMany({
      where: { idPessoa: PessoaId },
    });
  }

  async findPessoasByCursoId(CursoId: number): Promise<CursoProgresso[]> {
    return this.prisma.cursoProgresso.findMany({
      where: { idCurso: CursoId },
    });
  }

  async delete(PessoaId: number, CursoId: number): Promise<CursoProgresso> {
    return this.prisma.cursoProgresso.delete({
      where: { idCurso_idPessoa: { idCurso: CursoId, idPessoa: PessoaId } },
    });
  }

  async markCursoAsConcluido(PessoaId: number, CursoId: number) {
    return this.prisma.cursoProgresso.update({
      where: { idCurso_idPessoa: { idCurso: CursoId, idPessoa: PessoaId } },
      data: { concluido: true, DataFim: null },
    });
  }
}
