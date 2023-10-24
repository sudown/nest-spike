import { ApiProperty } from '@nestjs/swagger';
export class Pessoa {
  /**
   * The name of the Cat
   * @example Pessoa
   */
  name: string;

  @ApiProperty()
  Nome: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  XP?: number;
  @ApiProperty()
  patenteId?: string;
}
