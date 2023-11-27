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
import { CreateCursaDto } from './dto/create-cursa.dto';
// import { Prisma } from '@prisma/client';
import winston from 'winston';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cursa } from './entities/cursa.entity';

@ApiTags('cursa')
@Controller('cursa')
export class CursaController {
  constructor(
    private readonly cursaService: CursaService,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Inserir pessoa em curso' })
  @ApiBody({ type: CreateCursaDto })
  @ApiResponse({
    status: 201,
    description: 'Pessoa inserida em curso com sucesso',
    type: Cursa,
  })
  @ApiResponse({
    status: 409,
    description: 'Erro de validação',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Pessoa com Id {Id} já está cursando o curso com Id {Id}',
            error: 'Conflict',
            statusCode: 409,
          },
        },
      },
    },
  })
  create(@Body() createCursaDto: CreateCursaDto) {
    return this.cursaService.create(createCursaDto);
  }

  @ApiOperation({ summary: 'Listar todas as pessoas em cursos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pessoas em cursos',
    type: [Cursa],
  })
  @ApiResponse({
    status: 204,
    description: 'Nenhuma pessoa em curso encontrada',
  })
  @Get()
  findAll() {
    return this.cursaService.findAll();
  }

  @ApiOperation({ summary: 'Remover uma pessoa de um curso' })
  @ApiResponse({
    status: 200,
    description: 'Pessoa removida de curso com sucesso',
  })
  @Delete(':cursoId/:pessoaId')
  removeByPessoaIdAndCursoId(
    @Param('cursoId') cursoId: string,
    @Param('pessoaId') pessoaId: string,
  ) {
    return this.cursaService.remove(+cursoId, +pessoaId);
  }
}
