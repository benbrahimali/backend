// notification.dto.ts
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly userId: string;  // مرجعية إلى المستخدم

  @IsString()
  @IsNotEmpty()
  readonly message: string;  // النص الفعلي للإشعار
}
export class UpdateNotificationDto {
    @IsMongoId()
    @IsNotEmpty()
    readonly userId: string;  // مرجعية إلى المستخدم
  
    @IsString()
    @IsNotEmpty()
    readonly message: string;  // النص الفعلي للإشعار
  }
  