import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Pessoa, Prisma } from '@prisma/client';

@Injectable()
export class PessoasRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data,
    });
  }

  async findAll(): Promise<Pessoa[]> {
    return this.prisma.pessoa.findMany();
  }

  async findOne(Id: number): Promise<Pessoa | null> {
    return this.prisma.pessoa.findUnique({
      where: { Id },
    });
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

  async remove(Id: number): Promise<Pessoa> {
    return this.prisma.pessoa.delete({
      where: { Id },
    });
  }
}
