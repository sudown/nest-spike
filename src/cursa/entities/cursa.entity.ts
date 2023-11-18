import { ApiProperty } from '@nestjs/swagger';

export class Cursa {
  @ApiProperty()
  id: number;
  @ApiProperty()
  pessoaId: number;
  @ApiProperty()
  cursoId: number;
}
