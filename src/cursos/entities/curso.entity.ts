import { ApiProperty } from '@nestjs/swagger';

export class Curso {
  @ApiProperty()
  Titulo: string;
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  CriadorId: number;
}
