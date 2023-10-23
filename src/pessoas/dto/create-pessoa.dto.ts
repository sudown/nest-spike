import { IsEmail, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePessoaDto {
  @IsUUID()
  Id: string;
  @IsString()
  Nome: string;
  @IsEmail()
  Email: string;
  @IsString()
  Tipo: number;
  @IsNumber()
  XP: number;
}
