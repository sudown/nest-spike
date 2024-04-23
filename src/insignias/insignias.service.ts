import { Injectable } from '@nestjs/common';
import { Insignia, Possui, Prisma } from '@prisma/client';
import { InsigniaRepository } from 'src/prisma/repositories/insignia.repository';

@Injectable()
export class InsigniaService {
  constructor(private readonly insigniaRepository: InsigniaRepository) {}

  async createInsignia(data: Prisma.InsigniaCreateInput): Promise<Insignia> {
    return this.insigniaRepository.createInsignia(data);
  }

  async findAllInsignias(): Promise<Insignia[]> {
    return this.insigniaRepository.findAllInsignias();
  }

  async findInsigniaById(id: number): Promise<Insignia | null> {
    return this.insigniaRepository.findInsigniaById(id);
  }

  async updateInsignia(
    id: number,
    data: Prisma.InsigniaUpdateInput,
  ): Promise<Insignia> {
    return this.insigniaRepository.updateInsignia(id, data);
  }

  async removeInsignia(id: number): Promise<Insignia> {
    return this.insigniaRepository.removeInsignia(id);
  }

  async createPossui(data: Prisma.PossuiCreateInput): Promise<Possui> {
    return this.insigniaRepository.createPossui(data);
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
