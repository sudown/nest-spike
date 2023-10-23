import { IsString } from 'class-validator';

export class CreatePatenteDto {
  @IsString()
  Nome: string;
  @IsString()
  Imagem: string;
  @IsString()
  Descricao: string;
}
