import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Aula } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AulasRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AulaCreateInput): Promise<Aula> {
    return this.prisma.aula.create({ data });
  }
}
