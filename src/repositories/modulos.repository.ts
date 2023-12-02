import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Modulo, ModuloProgresso, Prisma } from '@prisma/client';

interface IModuloRepository {
  create(data: Prisma.ModuloCreateInput): Promise<Modulo>;
  findAll(): Promise<Modulo[]>;
  findOne(Id: number): Promise<Modulo | null>;
  getModulosByCursoId(fkCursoId: number): Promise<Modulo[]>;
  update(Id: number, data: Prisma.ModuloUpdateInput): Promise<Modulo>;
  delete(Id: number): Promise<Modulo>;
  insertPessoaInModuloProgresso(
    dPessoa: number,
    IdAula: number,
  ): Promise<ModuloProgresso>;
  findModulosByPessoaId(PessoaId: number): Promise<ModuloProgresso[]>;
  deleteModuloProgresso(
    PessoaId: number,
    CursoId: number,
  ): Promise<ModuloProgresso>;
}

@Injectable()
export class ModuloRepository implements IModuloRepository {
  constructor(private readonly prisma: PrismaService) {}

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

  async findModulosByPessoaId(PessoaId: number): Promise<ModuloProgresso[]> {
    return this.prisma.moduloProgresso.findMany({
      where: { idPessoa: PessoaId },
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
}
