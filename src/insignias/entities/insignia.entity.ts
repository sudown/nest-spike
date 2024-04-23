import { ApiProperty } from '@nestjs/swagger';

export class Insignia {
  @ApiProperty()
  id: number;
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  imagem: string;
}
