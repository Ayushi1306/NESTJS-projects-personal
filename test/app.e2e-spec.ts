import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {ProductModule} from './../src/product/product.module';
import {ProductsService} from './../src/product/product.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let service = { getProducts: () => ['test'] };


  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(service)
    .useValue(service)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect({
        data: service.getProducts(),
      });
  });


  afterAll(async () => {
    await app.close();
  });


});
