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
import { PatenteViewModel } from 'src/http/view-models/patente-view-model';

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
  async create(@Body() createPatenteDto: CreatePatenteDto) {
    return PatenteViewModel.toHttp(
      await this.patentesService.create(createPatenteDto),
    );
  }

  @ApiOperation({ summary: 'Listar todas as patentes' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de todas as patentes',
    type: [Patente],
  })
  @Get()
  async findAll() {
    return (await this.patentesService.findAll()).map(PatenteViewModel.toHttp);
  }

  @ApiOperation({ summary: 'Listar uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de uma patente',
    type: Patente,
  })
  @ApiNotFoundResponse({ description: 'Patente não encontrada' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return PatenteViewModel.toHttp(await this.patentesService.findOne(+id));
  }

  @ApiOperation({ summary: 'Atualizar uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Patente atualizada com sucesso',
    type: Patente,
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatenteDto: UpdatePatenteDto,
  ) {
    return PatenteViewModel.toHttp(
      await this.patentesService.update(+id, updatePatenteDto),
    );
  }

  @ApiOperation({ summary: 'Remover uma patente' })
  @ApiResponse({
    status: 200,
    description: 'Patente removida com sucesso',
    type: Patente,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    PatenteViewModel.toHttp(await this.patentesService.remove(+id));
  }
}
