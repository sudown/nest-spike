import { CreateFeedbackDto } from 'src/feedbacks/dto/create-feedback.dto';
import { Feedback } from 'src/feedbacks/entities/feedback.entity';
import { Feedback as RawFeedback } from '@prisma/client';

export class PrismaFeedbackMapper {
  static toPersistence(dto: CreateFeedbackDto) {
    return {
      Data: dto.Data,
      Avaliacao: dto.Avaliacao,
      Comentario: dto.Comentario,
      fk_Aula_Id: dto.fk_Aula_Id,
      PessoaId: dto.PessoaId,
    };
  }

  static toDomain(raw: RawFeedback): Feedback {
    return new Feedback({
      Id: raw.Id,
      Avaliacao: raw.Avaliacao,
      Comentario: raw.Comentario,
      fk_Aula_Id: raw.fk_Aula_Id,
      PessoaId: raw.PessoaId,
      Data: raw.Data,
    });
  }
}
