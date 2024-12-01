// payment.dto.ts
import { IsMongoId, IsNotEmpty, IsNumber, IsEnum, IsDate, IsOptional } from 'class-validator';

export class CreatePaymentDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly reservationId: string;  // مرجعية إلى الحجز

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;  // المبلغ المدفوع

  @IsDate()
  @IsNotEmpty()
  readonly paymentDate: Date;  // تاريخ الدفع

  @IsEnum(['CreditCard', 'PayPal', 'BankTransfer'])
  @IsNotEmpty()
  readonly paymentMethod: string;  // طريقة الدفع

  @IsEnum(['Pending', 'Paid', 'Failed'])
  @IsOptional()
  readonly status?: string = 'Pending';  // حالة الدفع (افتراضيًا Pending)
}

export class UpdatePaymentDto {
  @IsMongoId()
  @IsOptional()
  readonly reservationId?: string;  // مرجعية إلى الحجز

  @IsNumber()
  @IsOptional()
  readonly amount?: number;  // المبلغ المدفوع

  @IsDate()
  @IsOptional()
  readonly paymentDate?: Date;  // تاريخ الدفع

  @IsEnum(['CreditCard', 'PayPal', 'BankTransfer'])
  @IsOptional()
  readonly paymentMethod?: string;  // طريقة الدفع

  @IsEnum(['Pending', 'Paid', 'Failed'])
  @IsOptional()
  readonly status?: string;  // حالة الدفع
}
