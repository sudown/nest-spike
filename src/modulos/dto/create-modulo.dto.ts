import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

class Connect {
  @ApiProperty()
  Id: number;
}

class CursoS {
  @ApiProperty()
  connect: Connect;
}

export class CreateModuloDto {
  @ApiProperty()
  @IsString()
  Titulo: string;
  @ApiProperty()
  @IsString()
  Descricao: string;
  @ApiProperty()
  @IsNumber()
  Sequencia: number;
  @ApiProperty()
  curso: CursoS;
}
