import { ApiProperty } from '@nestjs/swagger';

export class CreateCursaDto {
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
