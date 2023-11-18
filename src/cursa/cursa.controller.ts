import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CursaService } from './cursa.service';
// import { CreateCursaDto } from './dto/create-cursa.dto';
import { Prisma } from '@prisma/client';
import winston from 'winston';

@Controller('cursa')
export class CursaController {
  constructor(
    private readonly cursaService: CursaService,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  @Post()
  create(@Body() createCursaDto: Prisma.CursaCreateInput) {
    return this.cursaService.create(createCursaDto);
  }

  @Get()
  findAll() {
    return this.cursaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursaService.remove(+id);
  }
}
