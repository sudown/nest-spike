import { Injectable } from '@nestjs/common';
import { Prisma, Insignia, Possui } from '@prisma/client';
import { UpdateInsigniaDto } from './dto/update-insignia.dto';
import { InsigniaRepository } from 'src/prisma/repositories/insignia.repository';
import { CreateInsigniaDto } from './dto/create-insignia.dto';
import { CreatePossuiDto } from './dto/create-possui.dto';

@Injectable()
export class InsigniaService {
  constructor(private readonly insigniaRepository: InsigniaRepository) {}

  async createInsignia(data: CreateInsigniaDto): Promise<Insignia> {
    const input: Prisma.InsigniaCreateInput = {
      Descricao: data.descricao,
      Nome: data.nome,
      Imagem: data.imagem,
    };
    return this.insigniaRepository.createInsignia(input);
  }

  async findAllInsignias(): Promise<Insignia[]> {
    return this.insigniaRepository.findAllInsignias();
  }

  async findInsigniaById(id: number): Promise<Insignia | null> {
    return this.insigniaRepository.findInsigniaById(id);
  }

  async updateInsignia(id: number, data: UpdateInsigniaDto): Promise<Insignia> {
    const input: Prisma.InsigniaUpdateInput = {
      Descricao: data.descricao,
      Imagem: data.imagem,
      Nome: data.nome,
    };
    return this.insigniaRepository.updateInsignia(id, input);
  }
  async removeInsignia(id: number): Promise<Insignia> {
    return this.insigniaRepository.removeInsignia(id);
  }

  async createPossui(data: CreatePossuiDto): Promise<Possui> {
    const input: Prisma.PossuiCreateInput = {
      insignia: {
        connect: {
          Id: data.fk_Insignia_Id,
        },
      },
      pessoa: {
        connect: {
          Id: data.fk_Pessoa_Id,
        },
      },
    };

    return this.insigniaRepository.createPossui(input);
  }

  async findAllPossuicoes(): Promise<Possui[]> {
    return this.insigniaRepository.findAllPossuicoes();
  }

  async findPossuicaoById(id: number): Promise<Possui | null> {
    return this.insigniaRepository.findPossuicaoById(id);
  }

  async updatePossuicao(
    id: number,
    data: Prisma.PossuiUpdateInput,
  ): Promise<Possui> {
    return this.insigniaRepository.updatePossuicao(id, data);
  }

  async removePossuicao(id: number): Promise<Possui> {
    return this.insigniaRepository.removePossuicao(id);
  }
}
