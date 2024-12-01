import { IsNotEmpty, IsString, IsEnum, IsOptional, IsDate, IsInt } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string; // Reference to User

  @IsString()
  @IsNotEmpty()
  readonly stadiumId: string; // Reference to Stadium

  @IsDate()
  readonly reservationDate: Date;

  @IsEnum(['Pending', 'Paid', 'Cancelled'])
  @IsOptional()
  readonly status?: string; // Pending, Paid, Cancelled

  @IsInt()
  readonly duration: number; // مدة الحجز بالساعة
}

export class UpdateReservationDto {
  @IsString()
  @IsOptional()
  readonly userId?: string; // Reference to User

  @IsString()
  @IsOptional()
  readonly stadiumId?: string; // Reference to Stadium

  @IsDate()
  @IsOptional()
  readonly reservationDate?: Date;

  @IsEnum(['Pending', 'Paid', 'Cancelled'])
  @IsOptional()
  readonly status?: string; // Pending, Paid, Cancelled

  @IsInt()
  @IsOptional()  // ملاحظة: مدة الحجز اختياريّة عند التحديث
  readonly duration?: number;
}
