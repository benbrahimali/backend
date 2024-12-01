import { Test, TestingModule } from '@nestjs/testing';
import { ResrvationController } from './resrvation.controller';

describe('ResrvationController', () => {
  let controller: ResrvationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResrvationController],
    }).compile();

    controller = module.get<ResrvationController>(ResrvationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
