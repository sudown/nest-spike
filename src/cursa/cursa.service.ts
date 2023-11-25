import { Inject, Injectable } from '@nestjs/common';
import { CursaRepository } from 'src/repositories/cursa.repository';
import { Cursa, Prisma } from '@prisma/client';
import winston from 'winston';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import { CreateCursaDto } from './dto/create-cursa.dto';

@Injectable()
export class CursaService {
  constructor(
    private cursaRepository: CursaRepository,
    private aulasRepository: AulasRepository,
    private modulosRepository: ModuloRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: CreateCursaDto): Promise<Cursa> {
    try {
      const cursa = await this.cursaRepository.findByPessoaIdAndCursoId(
        data.fk_Pessoa_Id,
        data.fk_Curso_Id,
      );
      if (cursa.length > 0) {
        throw new Error('Pessoa já está nesse curso');
      }
      const aulas = await this.aulasRepository.getAulasByCursoId(
        data.fk_Curso_Id,
      );
      aulas.forEach((aula) => {
        this.cursaRepository.insertPessoaInAulaProgresso(
          data.fk_Pessoa_Id,
          aula.Id,
        );
      });
      const modulos = await this.modulosRepository.getModulosByCursoId(
        data.fk_Curso_Id,
      );
      modulos.forEach((modulo) => {
        this.cursaRepository.insertPessoaInModuloProgresso(
          data.fk_Pessoa_Id,
          modulo.Id,
        );
      });
      return this.cursaRepository.create({
        pessoa: {
          connect: {
            Id: data.fk_Pessoa_Id,
          },
        },
        curso: {
          connect: {
            Id: data.fk_Curso_Id,
          },
        },
      });
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
