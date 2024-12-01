// payment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from './entity/payement.entity';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/payement.dto';

import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  // إنشاء دفع جديد
  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = new this.paymentModel(createPaymentDto);
    return payment.save();
  }

  // تحديث دفع
  async update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
    const payment = await this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true })
      .populate('reservationId');
    
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  // جلب دفع حسب الـ ID
  async findById(id: string): Promise<Payment> {
    const payment = await this.paymentModel
      .findById(id)
      .populate('reservationId');
    
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  // جلب جميع المدفوعات
  async findAll(): Promise<Payment[]> {
    return this.paymentModel
      .find()
      .populate('reservationId');
  }
}
