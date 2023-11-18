import { ApiProperty } from '@nestjs/swagger';
// import { Curso } from 'src/cursos/entities/curso.entity';
// import { Pessoa } from 'src/pessoas/entities/pessoa.entity';

class Connect {
  @ApiProperty()
  Id: number;
}

class PessoaS {
  @ApiProperty()
  connect: Connect;
}

class CursoS {
  @ApiProperty()
  connect: Connect;
}

export class CreateCursaDto {
  @ApiProperty()
  pessoa: PessoaS;
  @ApiProperty()
  curso: CursoS;
}
