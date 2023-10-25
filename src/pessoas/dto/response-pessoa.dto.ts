import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Pessoa } from '@prisma/client';

export class PessoaResponseDto {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  Nome: string;
  @ApiProperty()
  @IsEmail()
  Email: string;
  @ApiProperty()
  @IsString()
  Tipo: string;
  @ApiProperty()
  XP: number;
  @ApiProperty()
  patenteId: number;

  constructor(pessoa: Pessoa) {
    this.Id = pessoa.Id;
    this.Nome = pessoa.Nome;
    this.Email = pessoa.Email;
    this.Tipo = pessoa.Tipo;
    this.XP = pessoa.XP;
    this.patenteId = pessoa.patenteId;
  }
}
