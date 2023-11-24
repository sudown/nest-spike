import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aula.dto';
// import { UpdateAulaDto } from './dto/update-aula.dto';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { Aula } from './entities/aula.entity';

@ApiTags('aulas')
@Controller('aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

  @ApiOperation({ summary: 'Criar uma aula' })
  @ApiProperty({ type: CreateAulaDto })
  @ApiResponse({
    status: 201,
    description: 'Aula criada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Módulo com {Id} não encontrado' })
  @Post()
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulasService.create(createAulaDto);
  }

  @ApiOperation({ summary: 'Listar todas as aulas' })
  @ApiResponse({
    status: 200,
    description: 'Aulas listadas com sucesso',
    type: [Aula],
  })
  //talvez criar resposta de NO_CONTENT
  @Get()
  findAll() {
    return this.aulasService.findAll();
  }

  @ApiOperation({ summary: 'Listar uma aula' })
  @ApiResponse({
    status: 200,
    description: 'Aula listada com sucesso',
    type: Aula,
  })
  @ApiResponse({
    status: 404,
    description: 'Aula com {Id} não encontrada',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Aula com {Id} não encontrada',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulasService.findOne(+id);
  }

  @ApiOperation({ summary: 'Listar todas as aulas de um módulo' })
  @ApiResponse({
    status: 200,
    description: 'Aulas listadas com sucesso',
    type: [Aula],
  })
  @ApiResponse({
    status: 404,
    description: 'Módulo com {fk_modulo_id} não encontrado',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Módulo com {fk_modulo_id} não encontrado',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 204,
    description: 'Não há aulas para o módulo',
  })
  @Get('moduloId/:fk_modulo_id')
  getAulasByModuloId(@Param('fk_modulo_id') fk_modulo_id: number) {
    return this.aulasService.getAulasByModuloId(fk_modulo_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAulaDto) {
    return this.aulasService.update(+id, data);
  }

  @ApiOperation({ summary: 'Deletar uma aula' })
  @ApiResponse({
    status: 200,
    description: 'Aula deletada com sucesso',
    type: Aula,
  })
  @ApiResponse({
    status: 404,
    description: 'Aula com {Id} não encontrada',
    content: {
      'application/json': {
        schema: {
          example: {
            message: 'Aula com {Id}  não encontrada',
            error: 'Not Found',
            statusCode: 404,
          },
        },
      },
    },
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.aulasService.remove(+id);
  }
}
