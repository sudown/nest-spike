export class Feedback {
  constructor(data: Partial<Feedback>) {
    Object.assign(this, data);
  }

  Id: number;
  Avaliacao: number;
  Comentario: string;
  fk_Aula_Id: number;
  PessoaId: number;
  Data: Date;
}
