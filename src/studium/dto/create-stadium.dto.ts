import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStadiumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  capacity: number;

  @IsNumber()
  price: number;
}