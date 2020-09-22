import { Controller,Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product';
import { ProductsService } from './product.service';

@Crud({
    model: {
      type: Product,
    },
  })
@Controller('product')
export class ProductController {
    constructor(public service: ProductsService) {}

    @Get()
    getProducts(){
      return this.service.getProducts();
    }

    @Get(':id') 
    getProduct(@Param() params) {
    console.log('get a single product', params.id);
    return this.service.getProducts().filter(p => p.id == params.id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    console.log('create product', product);
    this.service.createProduct(product);
  }

  @Put()
  updateProduct(@Body() product: Product) {
    console.log('update product', product);
    this.service.updateProduct(product);
  }

  @Delete()
  deleteProduct(@Body() product: Product) {
    console.log('delete product', product.id);
    this.service.deleteProduct(product.id);
  }

}