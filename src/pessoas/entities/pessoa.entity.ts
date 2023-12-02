import { ApiProperty } from '@nestjs/swagger';
export class Pessoa {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Username: string;
  @ApiProperty({ required: false })
  Canal: string;
  @ApiProperty({ required: false })
  UrlAvatar?: string;
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  XP?: number;
  @ApiProperty()
  patenteId?: number;
}
