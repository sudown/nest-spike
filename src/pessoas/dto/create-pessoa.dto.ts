import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  Nome: string;
  @IsEmail()
  Email: string;
  @IsStrongPassword()
  Senha: string;
  @IsString()
  Tipo: string;
  XP?: number;
}
