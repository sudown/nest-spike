import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './guard/public.route';

type SignInRequest = {
  Id: number;
  Senha: string;
};

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() body: SignInRequest) {
    return this.authService.signIn(body.Id, body.Senha);
  }
}
