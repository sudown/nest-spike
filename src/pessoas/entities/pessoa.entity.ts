import { ApiProperty } from '@nestjs/swagger';
export class Pessoa {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  XP?: number;
  @ApiProperty()
  patenteId?: number;
}
