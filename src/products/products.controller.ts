import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { CreateProductDTO } from 'src/products/dto/createProduct.dto';
import { updateProductDTO } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';
  
@Controller('products')
export class ProductsController {
    constructor(readonly productsService: ProductsService) {}

    @Post()
    async createProduct(@Body() req: CreateProductDTO): Promise<string> {
      return this.productsService.createProduct(req);
    }
    @Get()
    async findAll() {
      return this.productsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.productsService.findOne(id);
    }
    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: updateProductDTO) {
      return this.productsService.update(id, req);
    }
}
  
