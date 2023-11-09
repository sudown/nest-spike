import { Inject, Injectable } from '@nestjs/common';
import { UpdateCursoDto } from './dto/update-curso.dto';
import * as winston from 'winston';
import { CursosRepository } from 'src/repositories/cursos.repository';
import { Curso, Prisma } from '@prisma/client';

@Injectable()
export class CursosService {
  constructor(
    private cursosRepository: CursosRepository,
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
    const curso = await this.cursosRepository.delete(Id);

    return curso;
  }
}
