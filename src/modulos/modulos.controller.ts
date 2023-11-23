import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Modulo } from './entities/modulo.entity';
import { Response } from 'express';
import { UpdateModuloDto } from './dto/update-modulo.dto';

@ApiTags('Modulos')
@Controller('modulos')
export class ModulosController {
  constructor(private readonly modulosService: ModulosService) {}

  @ApiOperation({ summary: 'Cria um novo módulo' })
  @ApiBody({ type: CreateModuloDto })
  @ApiResponse({
    status: 201,
    description: 'Módulo criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
  })
  @Post()
  create(@Body() createModuloDto: CreateModuloDto) {
    return this.modulosService.create(createModuloDto);
  }

  @ApiOperation({ summary: 'Listar todos os modulos' })
  @ApiResponse({
    status: 200,
    description: 'Módulos listados com sucesso',
    type: [Modulo],
  })
  @Get()
  findAll() {
    return this.modulosService.findAll();
  }

  @ApiOperation({ summary: 'Listar um módulo' })
  @ApiResponse({
    status: 200,
    description: 'Módulo listado com sucesso',
    type: Modulo,
  })
  @ApiResponse({
    status: 404,
    description: 'Módulo não encontrado',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Listar todos os módulos de um curso' })
  @ApiResponse({
    status: 200,
    description: 'Módulos listados com sucesso',
    type: [Modulo],
  })
  @ApiResponse({
    status: 204,
    description: 'Não existem módulos para o curso informado',
  })
  @Get('cursoId/:fkCursoId')
  async getModulosByCursoId(
    @Res() res: Response,
    @Param('fkCursoId') fkCursoId: string,
  ) {
    const modulos = await this.modulosService.getModulosByCursoId(+fkCursoId);
    if (modulos.length === 0) {
      return res.status(HttpStatus.NO_CONTENT).json();
    }

    return res.status(HttpStatus.OK).json(modulos);
  }

  @ApiOperation({ summary: 'Atualizar informações de um modulo' })
  @ApiResponse({
    status: 200,
    description: 'Módulo atualizado com sucesso',
    type: Modulo,
  })
  @ApiResponse({
    status: 404,
    description: 'Módulo com {Id} não encontrado',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Módulo com Id 122 não encontrado',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
    return this.modulosService.update(+id, updateModuloDto);
  }

  @ApiOperation({ summary: 'Remover um módulo' })
  @ApiResponse({
    status: 200,
    description: 'Módulo removido com sucesso',
    type: Modulo,
  })
  @ApiResponse({
    status: 404,
    description: 'Módulo com {Id} não encontrado',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Módulo com {id} não encontrado',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulosService.remove(+id);
  }
}
