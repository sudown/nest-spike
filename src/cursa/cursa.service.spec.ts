import { Test, TestingModule } from '@nestjs/testing';
import { CursaService } from './cursa.service';

describe('CursaService', () => {
  let service: CursaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursaService],
    }).compile();

    service = module.get<CursaService>(CursaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
