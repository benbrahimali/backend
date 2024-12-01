// match.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Team } from 'src/team/entity/team.entity';
import { User } from 'src/user/entities/user.entity';  // تأكد من استيراد الـ User
import { Stadium } from 'src/studium/entity/stadium.entity'; // تأكد من استيراد الـ Stadium

@Schema()
export class Match extends Document {
  @Prop({ required: true })
  date: Date;

  // ربط بالـ Stadium باستخدام الـ ObjectId
  @Prop({ type: String, ref: 'Stadium', required: true })
  stadiumId: string;

  // ربط بالـ User باستخدام الـ ObjectId (المنظم)
  @Prop({ type: String, ref: 'User', required: true })
  organizerId: string;

  // ربط بالـ Teams باستخدام الـ ObjectId
  @Prop({ type: String, ref: 'Team', required: true })
  teamAId: string; // استخدام الـ ObjectId فقط

  @Prop({ type: String, ref: 'Team', required: true })
  teamBId: string; // استخدام الـ ObjectId فقط

  @Prop({ default: 'scheduled' })
  status: string; // scheduled, ongoing, completed

  @Prop({ default: null })
  result?: string;
  @Prop({ required: true })
  matchLink: string;
  @Prop({ required: true })
  qrCodeImage: string;   // رابط المباراة
}


export const MatchSchema = SchemaFactory.createForClass(Match);
