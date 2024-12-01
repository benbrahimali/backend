// notification.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Notification extends Document {
  @Prop({ type: String, ref: 'User', required: true })
  userId: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
