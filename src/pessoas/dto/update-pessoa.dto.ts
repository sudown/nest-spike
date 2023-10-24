import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaDto } from './create-pessoa.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
  @ApiProperty({ required: false })
  Nome?: string;
  @ApiProperty({ required: false })
  Email?: string;
  @ApiProperty({ required: false })
  Senha?: string;
  @ApiProperty({ required: false })
  Tipo?: string;
  @ApiProperty({ required: false })
  XP?: number;
}
