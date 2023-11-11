import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [
    PessoasModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
