import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty()
  @Prop()
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop()
  hashRt: string;

  @ApiProperty()
  @Prop({ default: false })
  active: boolean;
  @Prop()
  otp: string;

  @ApiProperty()
  @Prop()
  otpExpiry: Date;
  @ApiProperty()
  @Prop()
  role: Role;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  last_name: string;

  @ApiProperty()
  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
