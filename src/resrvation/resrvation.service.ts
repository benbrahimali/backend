// reservation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from './entity/reservation.entity';
import { CreateReservationDto, UpdateReservationDto } from './dto/reservation.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
  ) {}

  // إضافة حجز جديد
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const createdReservation = new this.reservationModel(createReservationDto);
    return createdReservation.save();
  }

  // تحديث الحجز
  async update(
    id: string,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    const reservation = await this.reservationModel.findById(id);
    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }
    // تحديث الحجز
    Object.assign(reservation, updateReservationDto);
    return reservation.save();
  }

  // الحصول على جميع الحجوزات
  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }

  // الحصول على حجز حسب الـ ID
  async findById(id: string): Promise<Reservation> {
    const reservation = await this.reservationModel.findById(id).exec();
    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }
    return reservation;
  }

  // حذف حجز
  async remove(id: string): Promise<void> {
    const result = await this.reservationModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Reservation not found');
    }
  }
}
