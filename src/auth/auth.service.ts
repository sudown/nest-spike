import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private pessoasService: PessoasService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const pessoa = await this.pessoasService.findByEmail(email);

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

  async refreshToken(token: string) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { iat, exp, ...payload } = await this.jwtService.verifyAsync(token);
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch {
      throw new UnauthorizedException();
    }
  }
}
