import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @ApiProperty()
  @IsString()
  Nome: string;
  @ApiProperty()
  @IsEmail()
  @IsEmail()
  Email: string;
  @ApiProperty()
  @IsStrongPassword()
  Senha: string;
  @ApiProperty()
  @IsString()
  Username: string;
  @ApiProperty({ required: false })
  UrlAvatar?: string;
  @ApiProperty()
  @IsString()
  Tipo: string;
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
  @ApiProperty({ required: false })
  XP?: number;
  @ApiProperty({ required: false })
  Canal: string;
  @ApiProperty({ required: false })
  patenteId?: string;
}
