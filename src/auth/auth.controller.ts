import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './guard/public.route';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

class SignInRequestDto {
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Senha: string;
}

class AuthResponseDto {
  @ApiProperty()
  access_token: string;
}

class RefreshRequest {
  @ApiProperty()
  access_token: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiOperation({ summary: 'Autenticar usuário' })
  @ApiResponse({
    status: 200,
    description: 'Usuário autenticado',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Usuario não encontrado / Usuário ou senha inválidos',
            statusCode: 401,
          },
        },
      },
    },
  })
  @Post('login')
  signIn(@Body() body: SignInRequestDto) {
    return this.authService.signIn(body.Email, body.Senha);
  }

  @ApiOperation({ summary: 'Atualizar token' })
  @ApiResponse({
    status: 200,
    description: 'Usuário autenticado',
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas',
    content: {
      'application/json': {
        schema: { example: { message: 'Unauthorized', statusCode: 401 } },
      },
    },
  })
  @Post('RefreshToken')
  refreshToken(@Body() body: RefreshRequest) {
    return this.authService.refreshToken(body.access_token);
  }

  @ApiOperation({ summary: 'Validar token' })
  @ApiResponse({
    status: 200,
    description: 'Token válido',
    content: {
      'application/json': {
        schema: { example: { message: 'Token is valid', statusCode: 201 } },
      },
    },
  })
  @Post('ValidateToken')
  async alidateToken(@Body() body: RefreshRequest) {
    const result = await this.authService.validateUser(body.access_token);
    return {
      message: result.message,
      statusCode: result.statusCode,
    };
  }
}
