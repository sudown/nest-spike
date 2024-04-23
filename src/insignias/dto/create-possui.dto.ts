import { ApiProperty } from '@nestjs/swagger';

export class CreatePossuiDto {
  @ApiProperty({ description: 'ID do aluno' })
  fk_Pessoa_Id: number;
  @ApiProperty({ description: 'ID da insígnia' })
  fk_Insignia_Id: number;
}
