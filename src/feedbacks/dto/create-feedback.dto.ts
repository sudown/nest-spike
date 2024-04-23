import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty()
  Avaliacao: number;
  @ApiProperty()
  Comentario: string;
  @ApiProperty()
  fk_Aula_Id: number;
  @ApiProperty()
  PessoaId: number;
  @ApiProperty()
  Data: Date;
}
