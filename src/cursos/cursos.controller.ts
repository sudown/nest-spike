import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

import winston from 'winston';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CursoProgressoDto } from './dto/cursoProgresso.dto';

@ApiTags('cursos')
@Controller('cursos')
export class CursosController {
  constructor(
    private readonly cursosService: CursosService,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um curso' })
  @ApiProperty({ type: CreateCursoDto })
  @ApiResponse({
    status: 201,
    description: 'Curso criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
  })
  create(@Body() createCursoDto: CreateCursoDto) {
    try {
      this.logger.info('Criando um curso');
      return this.cursosService.create(createCursoDto);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cursos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de cursos',
    type: [Curso],
  })
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um curso' })
  @ApiResponse({
    status: 200,
    description: 'Curso encontrado com sucesso',
    type: Curso,
  })
  @ApiResponse({
    status: 404,
    description: 'Curso não encontrado',
  })
  findOne(@Param('id') id: number) {
    return this.cursosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um curso' })
  @ApiProperty({ type: UpdateCursoDto })
  @ApiResponse({
    status: 200,
    description: 'Curso atualizado com sucesso',
    type: Curso,
  })
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
  })
  @ApiResponse({
    status: 404,
    description: 'Curso não encontrado',
  })
  async update(
    @Param('id') id: string,
    @Body() updatePessoaDto: UpdateCursoDto,
  ) {
    return this.cursosService.update(+id, updatePessoaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um curso' })
  @ApiResponse({
    status: 200,
    description: 'Curso removido com sucesso',
    type: Curso,
  })
  @ApiResponse({
    status: 404,
    description: 'Curso não encontrado',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Curso id {id} não encontrado',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }
  @Get('return/:id')
  @ApiOperation({ summary: 'Retornar um curso' })
  @ApiResponse({
    status: 200,
    description: 'Curso retornado com sucesso',
    type: Curso,
  })
  @ApiResponse({
    status: 404,
    description: 'Curso não encontrado',
  })
  async return(@Param('id') id: string) {
    return id;
  }

  @ApiOperation({ summary: 'Retornar o progresso de uma pessoas nos cursos' })
  @ApiResponse({
    status: 200,
    description: 'Progresso retornado com sucesso',
    type: [CursoProgressoDto],
  })
  @ApiResponse({
    status: 204,
    description: 'Pessoa não está cursando nenhum curso',
  })
  @Get('progresso/pessoaId/:pessoaId')
  pessoaProgresso(@Param('pessoaId') pessoaId: string) {
    return this.cursosService.findCursosByPessoaId(+pessoaId);
  }
}
