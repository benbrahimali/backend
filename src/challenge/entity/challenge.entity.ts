// challenge.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Team } from 'src/team/entity/team.entity';
import { Match } from 'src/match/entity/match.entity';

@Schema()
export class Challenge extends Document {
  @Prop({ type: String, ref: 'Team', required: true })
  teamAId: string;

  @Prop({ type: String, ref: 'Team', required: true })
  teamBId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ default: 'pending' })
  status: string; // pending, accepted, completed

  @Prop({ type: String, ref: 'Match' })
  matchId: string; // يتم ربط التحدي بمباراة إذا تمت

}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);
