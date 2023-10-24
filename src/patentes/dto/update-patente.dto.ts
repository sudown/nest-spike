import { PartialType } from '@nestjs/mapped-types';
import { CreatePatenteDto } from './create-patente.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePatenteDto extends PartialType(CreatePatenteDto) {
  @ApiProperty({ required: false })
  Nome?: string;
  @ApiProperty({ required: false })
  Imagem?: string;
  @ApiProperty({ required: false })
  Descricao?: string;
}
