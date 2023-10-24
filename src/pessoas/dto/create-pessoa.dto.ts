import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  @IsEmail()
  Email: string;
  @ApiProperty()
  @IsStrongPassword()
  Senha: string;
  @ApiProperty()
  @IsString()
  Tipo: string;
  @ApiProperty({ required: false })
  XP?: number;
}
