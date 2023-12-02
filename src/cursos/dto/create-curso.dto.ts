import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCursoDto {
  @ApiProperty()
  @IsString()
  Titulo: string;
  @ApiProperty()
  @IsString()
  Descricao: string;
  @ApiProperty()
  @IsNumber()
  Duracao: number;
  @ApiProperty()
  @IsNumber()
  CriadorId: number;
  @ApiProperty({ required: false })
  UrlThumbnail: string;
  pessoa: any; //achar o tipo depois
}
