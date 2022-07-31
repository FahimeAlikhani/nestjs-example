import { Test, TestingModule } from '@nestjs/testing';
import { GaleryController } from './galery.controller';

describe('GaleryController', () => {
  let controller: GaleryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GaleryController],
    }).compile();

    controller = module.get<GaleryController>(GaleryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
