import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatentesService } from './patentes.service';
import { CreatePatenteDto } from './dto/create-patente.dto';
import { UpdatePatenteDto } from './dto/update-patente.dto';
import { Patente } from './entities/patente.entity';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('patentes')
@Controller('patentes')
export class PatentesController {
  constructor(private readonly patentesService: PatentesService) {}

  @ApiOperation({ summary: 'Criar uma patente' })
  @ApiProperty({ type: CreatePatenteDto })
  @ApiResponse({
    status: 201,
    description: 'Patente criada com sucesso',
    type: Patente,
  })
  @Post()
  create(@Body() createPatenteDto: CreatePatenteDto) {
    return this.patentesService.create(createPatenteDto);
  }

  @ApiOperation({ summary: 'Listar todas as patentes' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de todas as patentes',
    type: [Patente],
  })
  @Get()
  findAll() {
    return this.patentesService.findAll();
  }

  @ApiOperation({ summary: 'Listar uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de uma patente',
    type: Patente,
  })
  @ApiNotFoundResponse({ description: 'Patente não encontrada' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patentesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualizar uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Patente atualizada com sucesso',
    type: Patente,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatenteDto: UpdatePatenteDto) {
    return this.patentesService.update(+id, updatePatenteDto);
  }

  @ApiOperation({ summary: 'Remover uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Patente removida com sucesso',
    type: Patente,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patentesService.remove(+id);
  }
}
