import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Modulo, Prisma } from '@prisma/client';

@Injectable()
export class ModuloRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ModuloCreateInput): Promise<Modulo> {
    return this.prisma.modulo.create({
      data,
    });
  }
}
