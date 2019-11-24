import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('api/v1/users')
export class UsersController {
    @Get()
    findAll() {
        return 'ข้อมูลผู้ใช้ทั้งหมด';
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return 'ค้นหาผู้ใช้เฉพาะ Id' + id;
    }

    @Post()
    create() {
        return 'สร้างผู้ใช้ใหม่';
    }

    @Put(':id')
    update(@Param('id') id: number) {
        return 'แก้ไขผู้ใช้ id' + id;
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return 'ลบผู้ใช้ id' + id;
    }

}
