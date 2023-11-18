import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCursaDto {
  @ApiProperty()
  @IsNumber()
  pessoaId: number;
  @ApiProperty()
  @IsNumber()
  cursoId: number;
}
