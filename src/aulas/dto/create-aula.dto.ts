import { ApiProperty } from '@nestjs/swagger';

export class CreateAulaDto {
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  Titulo: string;
  @ApiProperty()
  fk_modulo_id: number;
  @ApiProperty()
  Sequencia: number;
  @ApiProperty()
  UrlVideo: string;
  @ApiProperty()
  Duracao: number;
  @ApiProperty({ required: false })
  XP?: number;
}
