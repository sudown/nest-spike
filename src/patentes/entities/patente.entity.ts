import { ApiProperty } from '@nestjs/swagger/dist';

export class Patente {
  /**
   * The name of the Cat
   * @example Patente
   */
  name: string;
  @ApiProperty()
  Id: string;
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  Imagem: string;
}
