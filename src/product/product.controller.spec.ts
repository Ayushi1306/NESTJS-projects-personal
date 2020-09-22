import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductsService } from './product.service';
import { Product } from './product';

describe('ProductController', () => {
  let controller: ProductController;
  let service : ProductsService;


  beforeEach(() => {
    service = new ProductsService(Product);
    controller = new ProductController(service);
  });
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers:[ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
