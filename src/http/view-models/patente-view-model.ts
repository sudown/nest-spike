import { Patente } from 'src/patentes/entities/patente.entity';

export class PatenteViewModel {
  static toHttp(patente: Patente) {
    return {
      Id: patente.Id,
      Nome: patente.Nome,
      Imagem: patente.Imagem,
      Descricao: patente.Descricao,
    };
  }
}
