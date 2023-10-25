import { Injectable, Inject } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from 'src/repositories/pessoas.repository';
import { Pessoa, Prisma } from '@prisma/client';
import { PessoaResponseDto } from 'src/pessoas/dto/response-pessoa.dto';
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

  async findAll(): Promise<PessoaResponseDto[]> {
    const pessoas = await this.pessoasRepository.findAll();

    const pessoasSemSenha: PessoaResponseDto[] = pessoas.map((pessoa) =>
      this.removeSensitiveData(pessoa),
    );

    return pessoasSemSenha;
  }

  async findOne(Id: number): Promise<PessoaResponseDto | null> {
    const pessoa = await this.pessoasRepository.findOne(Id);

    if (!pessoa) return null;

    return this.removeSensitiveData(pessoa);
  }

  async update(Id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    return this.pessoasRepository.update(Id, updatePessoaDto);
  }

  async remove(Id: number): Promise<PessoaResponseDto> {
    const pessoa = await this.pessoasRepository.delete(Id);

    return this.removeSensitiveData(pessoa);
  }

  // Função para remover a senha de um objeto PessoaResponseDto
  private removeSensitiveData(pessoa: Pessoa): PessoaResponseDto {
    return new PessoaResponseDto(pessoa);
  }
}
