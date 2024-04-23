import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateInsigniaDto {
  @ApiProperty()
  @IsString()
  descricao: string;
  @ApiProperty()
  @IsString()
  nome: string;
  @ApiProperty()
  @IsString()
  imagem: string;
}
