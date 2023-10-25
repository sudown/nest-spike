import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Pessoa, Prisma } from '@prisma/client';
import { PessoaResponseDto } from 'src/pessoas/dto/response-pessoa.dto';

@Injectable()
export class PessoasRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data,
    });
  }

  async findAll(): Promise<PessoaResponseDto[]> {
    const pessoas = await this.prisma.pessoa.findMany();

    const pessoasSemSenha: PessoaResponseDto[] = pessoas.map(
      (pessoa) => new PessoaResponseDto(pessoa),
    );

    return pessoasSemSenha;
  }

  async findOne(Id: number): Promise<PessoaResponseDto | null> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { Id },
    });

    if (!pessoa) return null;

    return new PessoaResponseDto(pessoa);
  }

  async update(
    Id: number,
    updatePessoaDto: Prisma.PessoaUpdateInput,
  ): Promise<Pessoa> {
    return this.prisma.pessoa.update({
      where: { Id },
      data: updatePessoaDto,
    });
  }

  async delete(Id: number): Promise<PessoaResponseDto> {
    const pessoa = await this.prisma.pessoa.delete({
      where: { Id },
    });

    return new PessoaResponseDto(pessoa);
  }
}
