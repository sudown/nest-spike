import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
// import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Prisma } from '@prisma/client';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  create(@Body() createModuloDto: Prisma.ModuloCreateInput) {
    return this.modulosService.create(createModuloDto);
  }

  // @Get()
  // findAll() {
  //   return this.modulosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.modulosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateModuloDto: UpdateModuloDto) {
  //   return this.modulosService.update(+id, updateModuloDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.modulosService.remove(+id);
  // }
}
