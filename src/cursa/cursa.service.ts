import {
  ConflictException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CursaRepository } from 'src/repositories/cursoProgresso.repository';
import { CursoProgresso } from '@prisma/client';
import winston from 'winston';
import { AulasRepository } from 'src/repositories/aulas.repository';
import { ModuloRepository } from 'src/repositories/modulos.repository';
import { CreateCursaDto } from './dto/create-cursa.dto';
import { UpdateCursaDto } from './dto/update-cursa.dto';

@Injectable()
export class CursaService {
  constructor(
    private cursaRepository: CursaRepository,
    private aulasRepository: AulasRepository,
    private modulosRepository: ModuloRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: CreateCursaDto): Promise<CursoProgresso> {
    const cursa = await this.cursaRepository.findOne(
      data.idCurso,
      data.idPessoa,
    );

    if (cursa) {
      throw new ConflictException(
        `Pessoa com Id ${data.idPessoa} já está cursando o curso com Id ${data.idCurso}`,
      );
    }

    const aulas = await this.aulasRepository.getAulasByCursoId(data.idCurso);
    aulas.forEach((aula) => {
      this.aulasRepository.insertPessoaInAulaProgresso(data.idPessoa, aula.Id);
    });

    const modulos = await this.modulosRepository.getModulosByCursoId(
      data.idCurso,
    );
    modulos.forEach((modulo) => {
      this.modulosRepository.insertPessoaInModuloProgresso(
        data.idPessoa,
        modulo.Id,
      );
    });
    return this.cursaRepository.create({
      curso: { connect: { Id: data.idCurso } },
      pessoa: { connect: { Id: data.idPessoa } },
      concluido: data.concluido,
      DataInicio: data.dataInicio,
      DataFim: data.dataFim,
    });
  }

  async update(
    IdCurso: number,
    IdPessoa: number,
    data: UpdateCursaDto,
  ): Promise<CursoProgresso> {
    return this.cursaRepository.update(IdCurso, IdPessoa, data);
  }

  async findAll(): Promise<CursoProgresso[]> {
    const cursos = await this.cursaRepository.findAll();
    if (cursos.length === 0) {
      throw new HttpException(
        'Não há cursos cadastrados',
        HttpStatus.NO_CONTENT,
      );
    }
    return cursos;
  }

  async findOne(IdCurso: number, IdPessoa: number): Promise<CursoProgresso> {
    const curso = await this.cursaRepository.findOne(IdCurso, IdPessoa);
    if (!curso) {
      throw new HttpException(
        `Não há curso com Id ${IdCurso} para a pessoa com Id ${IdPessoa}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return curso;
  }

  async findCursosByPessoaId(PessoaId: number): Promise<CursoProgresso[]> {
    return this.cursaRepository.findCursosByPessoaId(PessoaId);
  }

  async findPessoasByCursoId(CursoId: number): Promise<CursoProgresso[]> {
    return this.cursaRepository.findPessoasByCursoId(CursoId);
  }

  async remove(IdCurso: number, IdPessoa: number): Promise<CursoProgresso> {
    const cursoProgresso = await this.cursaRepository.findOne(
      IdCurso,
      IdPessoa,
    );

    if (!cursoProgresso) {
      throw new HttpException(
        `Não há curso com Id ${IdCurso} para a pessoa com Id ${IdPessoa}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const aulas = await this.aulasRepository.findAulasByPessoaId(IdPessoa);
    const modulos =
      await this.modulosRepository.findModulosByPessoaId(IdPessoa);

    aulas.forEach((aula) => {
      this.aulasRepository.deleteAulaProgresso(IdPessoa, aula.idAula);
    });
    modulos.forEach((modulo) => {
      this.modulosRepository.deleteModuloProgresso(IdPessoa, modulo.idModulo);
    });

    return this.cursaRepository.delete(IdPessoa, IdCurso);
  }
}
