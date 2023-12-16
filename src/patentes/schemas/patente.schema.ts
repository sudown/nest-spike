import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatenteDocument = Patente & Document;

@Schema()
export class Patente {
  @Prop()
  Nome: string;

  @Prop()
  Imagem: string;

  @Prop()
  Descricao: string;
}

export const PatenteSchema = SchemaFactory.createForClass(Patente);
