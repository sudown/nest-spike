import { Injectable, Inject } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from 'src/repositories/pessoas.repository';
import { Pessoa, Prisma } from '@prisma/client';
import * as winston from 'winston';

@Injectable()
export class PessoasService {
  constructor(
    private pessoasRepository: PessoasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    try {
      this.logger.info('Pessoa criada com sucesso');
      return this.pessoasRepository.create(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoasRepository.findAll();
  }

  async findOne(Id: number): Promise<Pessoa | null> {
    return this.pessoasRepository.findOne(Id);
  }

  async update(Id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    return this.pessoasRepository.update(Id, updatePessoaDto);
  }

  async remove(Id: number): Promise<Pessoa> {
    return this.pessoasRepository.delete(Id);
  }
}
