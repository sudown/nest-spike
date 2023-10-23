import { Test, TestingModule } from '@nestjs/testing';
import { PatentesController } from './patentes.controller';
import { PatentesService } from './patentes.service';

describe('PatentesController', () => {
  let controller: PatentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatentesController],
      providers: [PatentesService],
    }).compile();

    controller = module.get<PatentesController>(PatentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
