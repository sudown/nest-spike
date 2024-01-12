import { AulaProgresso, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { Aula } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { ModuloRepository } from './modulos.repository';
import { CursosRepository } from './cursos.repository';

interface IAulasRepository {
  create(data: Prisma.AulaCreateInput): Promise<Aula>;
  findAll(): Promise<Aula[]>;
  findOne(Id: number): Promise<Aula | null>;
  getAulasByCursoId(fk_curso_id: number): Promise<Aula[]>;
  getProgressoAulasByPessoaId(idPessoa: number): Promise<AulaProgresso[]>;
  getAulasByModuloId(fk_modulo_id: number): Promise<Aula[]>;
  update(Id: number, data: Prisma.AulaUpdateInput): Promise<Aula>;
  delete(Id: number): Promise<Aula>;
  deleteAulaProgresso(
    PessoaId: number,
    CursoId: number,
  ): Promise<AulaProgresso>;
  findAulasByPessoaId(PessoaId: number): Promise<AulaProgresso[]>;
  insertPessoaInAulaProgresso(
    IdPessoa: number,
    IdAula: number,
  ): Promise<AulaProgresso>;
}

@Injectable()
export class AulasRepository implements IAulasRepository {
  constructor(
    private prisma: PrismaService,
    private cursosRepository: CursosRepository,
    private modulosRepository: ModuloRepository,
  ) {}

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

  async getAulasByCursoId(fk_curso_id: number): Promise<Aula[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const curso = await this.cursosRepository.findOne(fk_curso_id);
    const modulos =
      await this.modulosRepository.getModulosByCursoId(fk_curso_id);
    let aulas: Aula[] = [];
    for (let i = 0; i < modulos.length; i++) {
      const aulasDoModulo = await this.getAulasByModuloId(modulos[i].Id);
      aulas = [...aulas, ...aulasDoModulo];
    }
    return aulas;
  }

  async getProgressoAulasByPessoaId(
    idPessoa: number,
  ): Promise<AulaProgresso[]> {
    return this.prisma.aulaProgresso.findMany({
      where: { idPessoa },
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

  async deleteAulaProgresso(
    PessoaId: number,
    CursoId: number,
  ): Promise<AulaProgresso> {
    return this.prisma.aulaProgresso.delete({
      where: { idAula_idPessoa: { idAula: CursoId, idPessoa: PessoaId } },
    });
  }

  async findAulasByPessoaId(PessoaId: number): Promise<AulaProgresso[]> {
    return this.prisma.aulaProgresso.findMany({
      where: { idPessoa: PessoaId },
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
}
