import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  isString,
  IsString,
  MinLength,
} from '@nestjs/class-validator';
import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/enums/role.enum';

export class SignupDto {
  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  @IsEnum(Role)
  role: Role;


  @ApiProperty()
  @Optional()
  @IsString()
  name: string

  @ApiProperty()
  @Optional()
  @IsString()
  last_name: string

  @ApiProperty()
  @Optional()
  @IsString()
  phone: string
}
