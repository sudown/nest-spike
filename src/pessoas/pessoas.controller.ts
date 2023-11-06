import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Inject,
} from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import * as winston from 'winston';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Pessoa } from './entities/pessoa.entity';
import { Pessoa as PessoaPrisma } from '@prisma/client';
import { Public } from 'src/auth/guard/public.route';

@ApiTags('pessoas')
@Controller('pessoas')
export class PessoasController {
  constructor(
    private readonly pessoasService: PessoasService,
    @Inject('Logger') private readonly logger: winston.Logger,
  ) {}

  @ApiOperation({ summary: 'Criar uma pessoa' })
  @ApiProperty({ type: CreatePessoaDto })
  @Post()
  create(@Body() pessoa: CreatePessoaDto) {
    try {
      this.logger.info('Criando uma pessoa');
      return this.pessoasService.create(pessoa);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Listar todas as pessoas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de pessoas',
    type: [Pessoa],
  })
  async findAll() {
    const pessoas = await this.pessoasService.findAll();
    return pessoas.map((pessoa) => this.sanitizePessoa(pessoa));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar uma pessoa' })
  @ApiResponse({
    status: 200,
    description: 'Uma pessoa',
    type: Pessoa,
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada',
  })
  async findOne(@Param('id') id: string) {
    return this.sanitizePessoa(await this.pessoasService.findOne(+id));
  }

  @ApiOperation({ summary: 'Atualizar uma pessoa' })
  @ApiProperty({ type: UpdatePessoaDto })
  @ApiResponse({
    status: 200,
    description: 'Pessoa atualizada com sucesso',
    type: Pessoa,
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePessoaDto: UpdatePessoaDto,
  ) {
    return this.sanitizePessoa(
      await this.pessoasService.update(+id, updatePessoaDto),
    );
  }

  @ApiOperation({ summary: 'Deletar uma pessoa' })
  @ApiResponse({
    status: 200,
    description: 'Pessoa deletada com sucesso',
    type: Pessoa,
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const pessoaDeleted = await this.pessoasService.remove(+id);
    return this.sanitizePessoa(pessoaDeleted);
  }

  private sanitizePessoa(pessoa: PessoaPrisma): Pessoa {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { Senha, ...sanitizedPessoa } = pessoa;
    return sanitizedPessoa;
  }
}
