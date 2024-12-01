// team.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  captainId: string; // Reference to the team's captain (User)

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] }) // Array of User references
  members: Types.ObjectId[]; // Members of the team
}

export const TeamSchema = SchemaFactory.createForClass(Team);
