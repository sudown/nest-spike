import { ApiProperty } from '@nestjs/swagger';

export class CursoProgressoDto {
  @ApiProperty()
  idCurso: number;
  @ApiProperty()
  idPessoa: number;
  @ApiProperty()
  AulasConcluidas: number;
  @ApiProperty()
  TotalAulas: number;
  @ApiProperty()
  TituloCurso: string;
}
