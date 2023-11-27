import { ApiProperty } from '@nestjs/swagger';

export class Cursa {
  @ApiProperty()
  id: number;
  @ApiProperty()
  idCurso: number;
  @ApiProperty()
  idPessoa: number;
  @ApiProperty()
  concluido: boolean;
  @ApiProperty()
  dataInicio: Date;
  @ApiProperty()
  dataFim: Date;
}
