// payment.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/payement.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // إنشاء دفع جديد
  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  // تحديث دفع
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  // جلب دفع حسب الـ ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.paymentService.findById(id);
  }

  // جلب جميع المدفوعات
  @Get()
  async findAll() {
    return this.paymentService.findAll();
  }
}

