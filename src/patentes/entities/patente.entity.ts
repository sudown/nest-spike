// import { ApiProperty } from '@nestjs/swagger/dist';

export interface PatenteProps {
  Id?: number;
  Nome: string;
  Imagem: string;
  Descricao: string;
}

export class Patente {
  private props: PatenteProps;

  constructor(props: PatenteProps) {
    this.props = props;
  }

  public get Id(): number {
    return this.props.Id;
  }

  public get Nome(): string {
    return this.props.Nome;
  }

  public get Imagem(): string {
    return this.props.Imagem;
  }

  public get Descricao(): string {
    return this.props.Descricao;
  }
}
