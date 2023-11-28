import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateMateriaDto {
  @ApiProperty()
  @IsString()
  Nome: string;
  @IsString()
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  @IsString()
  URL: string;
  @ApiProperty()
  @IsNumber()
  fk_Aula_Id: number;
}
