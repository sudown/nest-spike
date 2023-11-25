import { ApiProperty } from '@nestjs/swagger';

export class Cursa {
  @ApiProperty()
  id: number;
  @ApiProperty()
  fk_Pessoa_id: number;
  @ApiProperty()
  fk_Curso_id: number;
}
