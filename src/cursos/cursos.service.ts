/* eslint-disable prettier/prettier */
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCursoDto } from './dto/update-curso.dto';
import * as winston from 'winston';
import { CursosRepository } from 'src/repositories/cursos.repository';
import { Curso, Prisma } from '@prisma/client';
import { CursaRepository } from 'src/repositories/cursoProgresso.repository';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { CursoProgressoDto } from './dto/cursoProgresso.dto';

@Injectable()
export class CursosService {
  constructor(
    private cursosRepository: CursosRepository,
    private cursaRepository: CursaRepository,
    private aulasRepository: AulasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: Prisma.CursoCreateInput): Promise<Curso> {
    return this.cursosRepository.create(data);
  }

  async findAll(): Promise<Curso[]> {
    const cursos = await this.cursosRepository.findAll();
    return cursos;
  }

  async findOne(Id: number): Promise<Curso | null> {
    const curso = await this.cursosRepository.findOne(Id);

    if (!curso) return null;

    return curso;
  }

  async update(Id: number, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    return this.cursosRepository.update(Id, updateCursoDto);
  }

  async remove(Id: number): Promise<Curso> {
    const curso = await this.cursosRepository.findOne(Id);
    if (!curso) {
      throw new NotFoundException(`Curso id ${Id} não encontrado`);
    }
    return await this.cursosRepository.delete(Id);
  }

  async findCursosByPessoaId(idPessoa: number): Promise<CursoProgressoDto[]> {
    const progressoAula =
      await this.cursosRepository.getProgressoCursoByPessoaId(idPessoa);
    if (progressoAula.length === 0) {
      throw new HttpException(
        'Pessoa não está cursando nenhum curso',
        HttpStatus.NO_CONTENT,
      );
    }
    return progressoAula;
  }
}
