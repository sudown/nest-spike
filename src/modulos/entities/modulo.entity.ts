import { ApiProperty } from '@nestjs/swagger';

export class Modulo {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Titulo: string;
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  Sequencia: number;
  @ApiProperty()
  fkCursoId: number;
}
