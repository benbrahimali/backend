// reservation.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReservationService } from './resrvation.service';
import { CreateReservationDto, UpdateReservationDto } from './dto/reservation.dto';
import { Reservation } from './entity/reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  // إضافة حجز جديد
  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.create(createReservationDto);
  }

  // تحديث حجز
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.update(id, updateReservationDto);
  }

  // الحصول على جميع الحجوزات
  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  // الحصول على حجز حسب الـ ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Reservation> {
    return this.reservationService.findById(id);
  }

  // حذف حجز
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.reservationService.remove(id);
  }
}
