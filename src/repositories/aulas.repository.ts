import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Aula } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { ModuloRepository } from './modulos.repository';
import { CursosRepository } from './cursos.repository';

@Injectable()
export class AulasRepository {
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
