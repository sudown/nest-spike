import { ApiProperty } from '@nestjs/swagger';

export class Materia {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  URL: string;
  @ApiProperty()
  fk_Aula_Id: number;
}
