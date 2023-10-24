import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePatenteDto {
  @ApiProperty()
  @IsString()
  Nome: string;
  @ApiProperty()
  @IsString()
  Imagem: string;
  @ApiProperty()
  @IsString()
  Descricao: string;
}
