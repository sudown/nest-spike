import { Inject, Injectable } from '@nestjs/common';
import { CursaRepository } from 'src/repositories/cursa.repository';
import { Cursa, Prisma } from '@prisma/client';
import winston from 'winston';
import { AulasRepository } from 'src/repositories/aulas.repository';

@Injectable()
export class CursaService {
  constructor(
    private cursaRepository: CursaRepository,
    private aulasRepository: AulasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: Prisma.CursaCreateInput): Promise<Cursa> {
    try {
      const cursa = await this.cursaRepository.findByPessoaIdAndCursoId(
        data.pessoa.connect.Id,
        data.curso.connect.Id,
      );
      if (cursa.length > 0) {
        throw new Error('Pessoa já está nesse curso');
      }
      const aulas = await this.aulasRepository.getAulasByCursoId(
        data.curso.connect.Id,
      );
      aulas.forEach((aula) => {
        this.cursaRepository.insertPessoaInAulaProgresso(
          data.pessoa.connect.Id,
          aula.Id,
        );
      });
      return this.cursaRepository.create(data);
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async update(Id: number, data: Prisma.CursaUpdateInput): Promise<Cursa> {
    return this.cursaRepository.update(Id, data);
  }

  async findAll(): Promise<Cursa[]> {
    return this.cursaRepository.findAll();
  }

  async findOne(Id: number): Promise<Cursa> {
    return this.cursaRepository.findOne(Id);
  }

  async findByPessoaId(PessoaId: number): Promise<Cursa[]> {
    return this.cursaRepository.findByPessoaId(PessoaId);
  }

  async remove(Id: number): Promise<Cursa> {
    return this.cursaRepository.delete(Id);
  }

  async removeByPessoaIdAndCursoId(
    PessoaId: number,
    CursoId: number,
  ): Promise<Cursa> {
    return this.cursaRepository.deleteByPessoaIdAndCursoId(PessoaId, CursoId);
  }
}
