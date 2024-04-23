import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { Insignia, Possui } from '@prisma/client';
import { InsigniaService } from './insignias.service';

@Controller('insignias')
export class InsigniaController {
  constructor(private readonly insigniaService: InsigniaService) {}

  @Post()
  createInsignia(@Body() data: any): Promise<Insignia> {
    return this.insigniaService.createInsignia(data);
  }

  @Get()
  findAllInsignias(): Promise<Insignia[]> {
    return this.insigniaService.findAllInsignias();
  }

  @Get(':id')
  findInsigniaById(@Param('id') id: string): Promise<Insignia | null> {
    return this.insigniaService.findInsigniaById(Number(id));
  }

  @Put(':id')
  updateInsignia(
    @Param('id') id: string,
    @Body() data: any,
  ): Promise<Insignia> {
    return this.insigniaService.updateInsignia(Number(id), data);
  }

  @Delete(':id')
  removeInsignia(@Param('id') id: string): Promise<Insignia> {
    return this.insigniaService.removeInsignia(Number(id));
  }

  @Post('possui')
  createPossui(@Body() data: any): Promise<Possui> {
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
