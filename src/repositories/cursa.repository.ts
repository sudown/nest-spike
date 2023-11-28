import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CursoProgresso,
  Prisma,
  AulaProgresso,
  ModuloProgresso,
} from '@prisma/client';

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

  async deleteAulaProgresso(
    PessoaId: number,
    CursoId: number,
  ): Promise<AulaProgresso> {
    return this.prisma.aulaProgresso.delete({
      where: { idAula_idPessoa: { idAula: CursoId, idPessoa: PessoaId } },
    });
  }

  async deleteModuloProgresso(
    PessoaId: number,
    CursoId: number,
  ): Promise<ModuloProgresso> {
    return this.prisma.moduloProgresso.delete({
      where: { idModulo_idPessoa: { idModulo: CursoId, idPessoa: PessoaId } },
    });
  }

  async findAulasByPessoaId(PessoaId: number): Promise<AulaProgresso[]> {
    return this.prisma.aulaProgresso.findMany({
      where: { idPessoa: PessoaId },
    });
  }

  async findModulosByPessoaId(PessoaId: number): Promise<ModuloProgresso[]> {
    return this.prisma.moduloProgresso.findMany({
      where: { idPessoa: PessoaId },
    });
  }

  async markCursoAsConcluido(PessoaId: number, CursoId: number) {
    return this.prisma.cursoProgresso.update({
      where: { idCurso_idPessoa: { idCurso: CursoId, idPessoa: PessoaId } },
      data: { concluido: true, DataFim: null },
    });
  }

  async insertPessoaInAulaProgresso(
    IdPessoa: number,
    IdAula: number,
  ): Promise<AulaProgresso> {
    const data = new Date();
    return this.prisma.aulaProgresso.create({
      data: {
        concluido: false,
        DataFim: data.toISOString(),
        DataInicio: data.toISOString(),
        aula: {
          connect: {
            Id: IdAula,
          },
        },
        pessoa: {
          connect: {
            Id: IdPessoa,
          },
        },
      },
    });
  }

  async insertPessoaInModuloProgresso(
    dPessoa: number,
    IdAula: number,
  ): Promise<ModuloProgresso> {
    const data = new Date();
    return this.prisma.moduloProgresso.create({
      data: {
        concluido: false,
        DataFim: data.toISOString(),
        DataInicio: data.toISOString(),
        modulo: {
          connect: {
            Id: IdAula,
          },
        },
        pessoa: {
          connect: {
            Id: dPessoa,
          },
        },
      },
    });
  }
}
