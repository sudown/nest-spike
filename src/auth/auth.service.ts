import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private pessoasService: PessoasService,
    private jwtService: JwtService,
  ) {}

  async signIn(id: number, pass: string) {
    const pessoa = await this.pessoasService.findOne(id);

    if (!pessoa) return null;

    if (pessoa.Senha !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { Id: pessoa.Id, Nome: pessoa.Nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

    return pessoa;
  }
}
