import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Possui, Prisma, Insignia } from '@prisma/client';

@Injectable()
export class InsigniaRepository {
  constructor(private prisma: PrismaService) {}

  // Métodos CRUD para a tabela Insignia

  async createInsignia(data: Prisma.InsigniaCreateInput): Promise<Insignia> {
    return this.prisma.insignia.create({ data });
  }

  async findAllInsignias(): Promise<Insignia[]> {
    return this.prisma.insignia.findMany();
  }

  async findInsigniaById(id: number): Promise<Insignia | null> {
    return this.prisma.insignia.findUnique({ where: { Id: id } });
  }

  async updateInsignia(
    id: number,
    data: Prisma.InsigniaUpdateInput,
  ): Promise<Insignia> {
    return this.prisma.insignia.update({ where: { Id: id }, data });
  }

  async removeInsignia(id: number): Promise<Insignia> {
    return this.prisma.insignia.delete({ where: { Id: id } });
  }

  // Métodos CRUD para a tabela Possui

  async createPossui(data: Prisma.PossuiCreateInput): Promise<Possui> {
    return this.prisma.possui.create({ data });
  }

  async findAllPossuicoes(): Promise<Possui[]> {
    return this.prisma.possui.findMany();
  }

  async findPossuicaoById(id: number): Promise<Possui | null> {
    return this.prisma.possui.findUnique({ where: { ID_AlunoIns: id } });
  }

  async updatePossuicao(
    id: number,
    data: Prisma.PossuiUpdateInput,
  ): Promise<Possui> {
    return this.prisma.possui.update({ where: { ID_AlunoIns: id }, data });
  }

  async removePossuicao(id: number): Promise<Possui> {
    return this.prisma.possui.delete({ where: { ID_AlunoIns: id } });
  }
}
