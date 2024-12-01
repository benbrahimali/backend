import { Test, TestingModule } from '@nestjs/testing';
import { ResrvationService } from './resrvation.service';

describe('ResrvationService', () => {
  let service: ResrvationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResrvationService],
    }).compile();

    service = module.get<ResrvationService>(ResrvationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
