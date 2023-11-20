import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/helpers/comparePassword';

@Injectable()
export class AuthService {
  constructor(
    private pessoasService: PessoasService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const pessoa = await this.pessoasService.findByEmail(email);

    if (!pessoa) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    if (!(await comparePassword(pass, pessoa.Senha))) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
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

  async validateUser(
    token: string,
  ): Promise<{ message: string; statusCode: number }> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { iat, exp, ...payload } = await this.jwtService.verifyAsync(token);
      return {
        message: 'Token is valid',
        statusCode: 201,
      };
    } catch {
      throw new UnauthorizedException();
    }
  }
}
