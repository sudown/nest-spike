import { Injectable } from '@nestjs/common';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoasRepository } from 'src/repositories/pessoa.repository';
import { Pessoa, Prisma } from '@prisma/client';

@Injectable()
export class PessoasService {
  constructor(private pessoasRepository: PessoasRepository) {}

  async create(data: Prisma.PessoaCreateInput): Promise<Pessoa> {
    return this.pessoasRepository.create(data);
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
    return this.pessoasRepository.remove(Id);
  }
}
