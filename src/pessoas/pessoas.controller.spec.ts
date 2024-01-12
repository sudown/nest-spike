import { Test, TestingModule } from '@nestjs/testing';
import { PessoasController } from './pessoas.controller';
import { PessoasService } from './pessoas.service';
import { PessoasRepository } from '../prisma/repositories/pessoas.repository';
import { PrismaService } from '../prisma.service';
import * as winston from 'winston';

describe('PessoasController', () => {
  let pessoasController: PessoasController;
  let pessoasService: PessoasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PessoasController],
      providers: [
        PessoasService,
        PessoasRepository,
        PrismaService,
        {
          provide: 'Logger',
          useValue: winston.createLogger(),
        },
      ],
    }).compile();

    pessoasController = module.get<PessoasController>(PessoasController);
    pessoasService = module.get<PessoasService>(PessoasService);
  });

  describe('findAll', () => {
    it('should return an array of pessoas', async () => {
      const result = [
        {
          Id: 1,
          Nome: 'Teste',
          Tipo: 'Admin',
          Email: 'elliot@gmail.com',
          XP: 10,
          patenteId: 1,
        },
      ];
      jest
        .spyOn(pessoasService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));
    });
  });

  describe('findOne', () => {
    it('should return a pessoa', async () => {
      const result = {
        Id: 1,
        Nome: 'Teste',
        Tipo: 'Admin',
        Email: 'elliot@gmail.com',
        XP: 10,
        patenteId: 1,
      };
      jest
        .spyOn(pessoasService, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      expect(await pessoasController.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a pessoa', async () => {
      const updatePessoaDto = {
        Nome: 'Teste',
        Tipo: 'Admin',
        Email: 'elliot@gmail.com',
        XP: 10,
        patenteId: 1,
      };

      const result = {
        Id: 1,
        Nome: 'Teste',
        Tipo: 'Admin',
        Email: 'elliot@gmail.com',
        Senha: '123456',
        XP: 10,
        patenteId: 1,
      };
      jest
        .spyOn(pessoasService, 'update')
        .mockImplementation(() => Promise.resolve(result));
      const updatedPessoa = await pessoasController.update(
        '1',
        updatePessoaDto,
      );
      expect(updatedPessoa).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a pessoa', async () => {
      const result = {
        Id: 1,
        Nome: 'Teste',
        Tipo: 'Admin',
        Email: 'elliot@gmail.com',
        XP: 10,
        patenteId: 1,
      };
      jest
        .spyOn(pessoasService, 'remove')
        .mockImplementation(() => Promise.resolve(result));
      const deletedPessoa = await pessoasController.remove('4');
      expect(deletedPessoa).toBe(result);
    });
  });
});
