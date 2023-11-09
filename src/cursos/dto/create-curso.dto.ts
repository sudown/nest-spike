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
  CriadorId: number;
  @ApiProperty({ required: false })
  pessoa: any; //achar o tipo depois
}
