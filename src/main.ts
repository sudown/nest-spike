import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle("Sionise's API")
    .setDescription('The Sionise API description')
    .setVersion('1.0')
    .addTag('sionise')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({ disableErrorMessages: false, transform: true }),
  );
  await app.listen(3333);
}
bootstrap();
