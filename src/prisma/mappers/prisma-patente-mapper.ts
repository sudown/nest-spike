import { Patente } from 'src/patentes/entities/patente.entity';
import { Patente as RawPatente } from '@prisma/client';

export class PrismaPatenteMapper {
  static toPersistence(patente: Patente) {
    return {
      Nome: patente.Nome,
      Imagem: patente.Imagem,
      Descricao: patente.Descricao,
    };
  }

  static toDomain(raw: RawPatente) {
    return new Patente({
      Id: raw.Id,
      Nome: raw.Nome,
      Imagem: raw.Imagem,
      Descricao: raw.Descricao,
    });
  }
}
