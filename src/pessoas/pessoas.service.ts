import { Injectable } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from '../prisma.service';
import { Pessoa, Prisma } from '@prisma/client';

@Injectable()
export class PessoasService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data,
    });
  }

  findAll() {
    return this.prisma.pessoa.findMany();
  }

  findOne(Id: number) {
    return this.prisma.pessoa.findUnique({
      where: { Id },
    });
  }

  update(Id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoa.update({
      where: { Id },
      data: updatePessoaDto,
    });
  }

  remove(Id: number) {
    return this.prisma.pessoa.delete({
      where: { Id },
    });
  }
}
