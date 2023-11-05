import { Controller, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

type SignInRequest = {
  Id: number;
  Senha: string;
};

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: SignInRequest) {
    return this.authService.signIn(body.Id, body.Senha);
  }
}
