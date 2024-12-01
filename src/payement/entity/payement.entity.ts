// payment.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop({ type: String, ref: 'Reservation', required: true })
  reservationId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  paymentDate: Date;

  @Prop({ enum: ['CreditCard', 'PayPal', 'BankTransfer'], required: true })
  paymentMethod: string;

  @Prop({ enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' })
  status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
