import { ApiProperty } from '@nestjs/swagger';

export class CreateCursaDto {
  @ApiProperty()
  fk_Pessoa_Id: number;
  @ApiProperty()
  fk_Curso_Id: number;
}
