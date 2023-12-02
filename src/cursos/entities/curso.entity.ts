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
  @ApiProperty({ required: false })
  UrlThumbnail: string;
  @ApiProperty()
  Duracao: number;
  @ApiProperty()
  XP: number;
}
