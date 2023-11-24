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

  @Get()
  findAll() {
    return this.aulasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulasService.findOne(+id);
  }

  @Get(':moduloId/fk_modulo_id')
  getAulasByModuloId(@Param('moduloId') moduloId: string) {
    return this.aulasService.getAulasByModuloId(+moduloId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAulaDto) {
    return this.aulasService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulasService.remove(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.aulasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAulaDto: UpdateAulaDto) {
  //   return this.aulasService.update(+id, updateAulaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.aulasService.remove(+id);
  // }
}
