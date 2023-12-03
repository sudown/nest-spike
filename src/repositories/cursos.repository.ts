import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Curso, Prisma } from '@prisma/client';
import { CursoProgressoDto } from 'src/cursos/dto/cursoProgresso.dto';

interface ICursosRepository {
  create(data: Prisma.CursoCreateInput): Promise<Curso>;
  update(Id: number, data: Prisma.CursoUpdateInput): Promise<Curso>;
  findAll(): Promise<Curso[]>;
  findOne(Id: number): Promise<Curso | null>;
  delete(Id: number): Promise<Curso>;
  getProgressoCursoByPessoaId(idPessoa: number): Promise<CursoProgressoDto[]>;
}

@Injectable()
export class CursosRepository implements ICursosRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CursoCreateInput): Promise<Curso> {
    return this.prisma.curso.create({ data });
  }

  async update(Id: number, data: Prisma.CursoUpdateInput): Promise<Curso> {
    return this.prisma.curso.update({
      where: { Id },
      data,
    });
  }

  async findAll(): Promise<Curso[]> {
    return this.prisma.curso.findMany();
  }

  async findOne(Id: number): Promise<Curso | null> {
    return this.prisma.curso.findUnique({
      where: { Id },
    });
  }

  async delete(Id: number): Promise<Curso> {
    return await this.prisma.curso.delete({
      where: { Id },
    });
  }

  async getProgressoCursoByPessoaId(
    idPessoa: number,
  ): Promise<CursoProgressoDto[]> {
    const progressoAulas: CursoProgressoDto[] = await this.prisma.$queryRaw`
    SELECT
    CP.idCurso,
    C.Titulo AS TituloCurso,
    CP.idPessoa,
    COUNT(AP.concluido = true OR NULL) AS AulasConcluidas,
    COUNT(*) AS TotalAulas
  FROM CursoProgresso CP
  JOIN Modulo M ON CP.idCurso = M.fkCursoId
  JOIN Aula A ON M.Id = A.fk_modulo_id
  LEFT JOIN AulaProgresso AP ON A.Id = AP.idAula AND CP.idPessoa = AP.idPessoa
  JOIN Curso C ON CP.idCurso = C.Id
  WHERE CP.idPessoa = ${idPessoa}
  GROUP BY CP.idCurso, C.Titulo, CP.idPessoa;
    `;

    // Converter BigInt para número antes de imprimir
    const progressoAulasFormatado = progressoAulas.map(
      (item: CursoProgressoDto) => ({
        ...item,
        AulasConcluidas: Number(item.AulasConcluidas),
        TotalAulas: Number(item.TotalAulas),
      }),
    );

    return progressoAulasFormatado;
  }
}
