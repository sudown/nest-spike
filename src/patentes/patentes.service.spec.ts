import { Test, TestingModule } from '@nestjs/testing';
import { PatentesService } from './patentes.service';

describe('PatentesService', () => {
  let service: PatentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatentesService],
    }).compile();

    service = module.get<PatentesService>(PatentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
