import { ApiProperty } from '@nestjs/swagger';

export class Curso {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Titulo: string;
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  CriadorId: number;
  @ApiProperty()
  Duracao: number;
  @ApiProperty()
  XP: number;
}
