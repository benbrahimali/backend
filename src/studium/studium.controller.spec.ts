import { Test, TestingModule } from '@nestjs/testing';
import { StudiumController } from './studium.controller';

describe('StudiumController', () => {
  let controller: StudiumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudiumController],
    }).compile();

    controller = module.get<StudiumController>(StudiumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
