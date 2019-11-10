import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    constructor(){}

    @Get()
    findAll() {
        return 'ข้อมูลสินค้าทั้งหมด';
    }
    
    @Get(':id') 
    findOne(@Param('id') id: number) {
        return 'ค้นหาสินค้าเฉพาะ Id' + id;
    }
    
    @Post()
    create() {
        return 'สร้างสินค้าใหม่';
    }

    @Put(':id')
    update(@Param('id') id: number) {
        return 'แก้ไขสินค้า id' + id;
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return 'ลบสินค้า id' + id; 
    }

}