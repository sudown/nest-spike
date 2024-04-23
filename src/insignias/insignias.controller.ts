import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';

import { Insignia, Possui } from '@prisma/client';
import { Insignia as InsigniaEntity } from './entities/insignia.entity';
import { InsigniaService } from './insignias.service';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateInsigniaDto } from './dto/create-insignia.dto';
import { UpdateInsigniaDto } from './dto/update-insignia.dto';
import { CreatePossuiDto } from './dto/create-possui.dto';

@ApiTags('insignias')
@Controller('insignias')
export class InsigniaController {
  constructor(private readonly insigniaService: InsigniaService) {}

  @ApiOperation({ summary: 'Criar uma insignia' })
  @ApiProperty({ type: CreateInsigniaDto })
  @ApiResponse({
    status: 201,
    description: 'Insignia criada com sucesso',
    type: InsigniaEntity,
  })
  @Post()
  createInsignia(@Body() data: CreateInsigniaDto): Promise<Insignia> {
    return this.insigniaService.createInsignia(data);
  }

  @ApiOperation({ summary: 'Listar todas as insignias' })
  @ApiResponse({
    status: 200,
    description: 'Listagem de todas as insignias',
    type: [InsigniaEntity],
  })
  @Get()
  findAllInsignias(): Promise<Insignia[]> {
    return this.insigniaService.findAllInsignias();
  }

  @Get(':id')
  findInsigniaById(@Param('id') id: string): Promise<Insignia | null> {
    return this.insigniaService.findInsigniaById(Number(id));
  }

  @Patch(':id')
  updateInsignia(
    @Param('id') id: string,
    @Body() data: UpdateInsigniaDto,
  ): Promise<Insignia> {
    return this.insigniaService.updateInsignia(Number(id), data);
  }

  @Delete(':id')
  removeInsignia(@Param('id') id: string): Promise<Insignia> {
    return this.insigniaService.removeInsignia(Number(id));
  }

  @ApiOperation({ summary: 'Criar uma possuicao' })
  @ApiProperty({ type: CreatePossuiDto })
  @Post('possui')
  createPossui(@Body() data: CreatePossuiDto): Promise<Possui> {
    return this.insigniaService.createPossui(data);
  }

  @Get('possuicoes')
  findAllPossuicoes(): Promise<Possui[]> {
    return this.insigniaService.findAllPossuicoes();
  }

  @Get('possuicoes/:id')
  findPossuicaoById(@Param('id') id: string): Promise<Possui | null> {
    return this.insigniaService.findPossuicaoById(Number(id));
  }

  @Put('possuicoes/:id')
  updatePossuicao(@Param('id') id: string, @Body() data: any): Promise<Possui> {
    return this.insigniaService.updatePossuicao(Number(id), data);
  }

  @Delete('possuicoes/:id')
  removePossuicao(@Param('id') id: string): Promise<Possui> {
    return this.insigniaService.removePossuicao(Number(id));
  }
}
