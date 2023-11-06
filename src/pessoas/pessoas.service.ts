import { Injectable, Inject } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from '../repositories/pessoas.repository';
import { Pessoa, Prisma } from '@prisma/client';
import * as winston from 'winston';

@Injectable()
export class PessoasService {
  constructor(
    private pessoasRepository: PessoasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    return this.pessoasRepository.create(data);
  }

  async findAll(): Promise<Pessoa[]> {
    const pessoas = await this.pessoasRepository.findAll();
    return pessoas;
  }

  async findOne(Id: number): Promise<Pessoa | null> {
    const pessoa = await this.pessoasRepository.findOne(Id);

    if (!pessoa) return null;

    return pessoa;
  }

  async findByEmail(Email: string): Promise<Pessoa | null> {
    const pessoa = await this.pessoasRepository.findByEmail(Email);

    if (!pessoa) return null;

    return pessoa;
  }

  async update(Id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    return this.pessoasRepository.update(Id, updatePessoaDto);
  }

  async remove(Id: number): Promise<Pessoa> {
    const pessoa = await this.pessoasRepository.delete(Id);

    return pessoa;
  }
}
