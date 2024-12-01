// reservation.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reservation extends Document {
  @Prop({ type: String, ref: 'User', required: true })
  userId: string;

  @Prop({ type: String, ref: 'Stadium', required: true })
  stadiumId: string;

  @Prop({ required: true })
  reservationDate: Date;

  @Prop({ enum: ['Pending', 'Paid', 'Cancelled'], default: 'Pending' })
  status: string;

  @Prop({ required: true })
  duration: number; // مدة الحجز بالساعة
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
