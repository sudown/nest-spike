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
  @ApiProperty({ required: false })
  YouTube?: string;
  @ApiProperty({ required: false })
  Discord?: string;
  @ApiProperty({ required: false })
  Linkedin?: string;
  @ApiProperty({ required: false })
  Instagram?: string;
  @ApiProperty({ required: false })
  Github?: string;
  @ApiProperty({ required: false })
  Twitter?: string;
  @ApiProperty()
  Tipo: string;
  @ApiProperty()
  XP?: number;
  @ApiProperty()
  patenteId?: number;
}
