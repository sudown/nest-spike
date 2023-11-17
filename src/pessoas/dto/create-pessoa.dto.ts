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
  @ApiProperty()
  @IsString()
  Tipo: string;
  @ApiProperty({ required: false })
  XP?: number;
  @ApiProperty({ required: false })
  Canal: string;
  @ApiProperty({ required: false })
  patenteId?: string;
}
