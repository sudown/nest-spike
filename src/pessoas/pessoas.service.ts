import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from '../repositories/pessoas.repository';
import { Pessoa, Prisma } from '@prisma/client';
import { generateHash } from 'src/helpers/generatePassword';
import * as winston from 'winston';

@Injectable()
export class PessoasService {
  constructor(
    private pessoasRepository: PessoasRepository,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    try {
      const pessoaEmail = await this.pessoasRepository.findByEmail(data.Email);
      const pessoaUsername = await this.pessoasRepository.findByUsername(
        data.Username,
      );
      if (pessoaEmail) {
        throw new ConflictException('Email já cadastrado');
      }
      if (pessoaUsername) {
        throw new ConflictException('Username já cadastrado');
      }
      const passwordHash = await generateHash(data.Senha);
      data.Senha = passwordHash;
      return this.pessoasRepository.create(data);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
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
