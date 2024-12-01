// match.dto.ts
import { IsMongoId, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateMatchDto {
  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsMongoId()
  @IsNotEmpty()
  readonly stadiumId: string; // Reference to Stadium

  @IsMongoId()
  @IsNotEmpty()
  readonly organizerId: string; // Reference to User

  @IsMongoId()
  @IsNotEmpty()
  readonly teamAId: string; // Reference to Team

  @IsMongoId()
  @IsNotEmpty()
  readonly teamBId: string; // Reference to Team
}

export class UpdateMatchDto {
  @IsDate()
  @IsOptional()
  readonly date?: Date;

  @IsMongoId()
  @IsOptional()
  readonly stadiumId?: string; // Reference to Stadium

  @IsMongoId()
  @IsOptional()
  readonly organizerId?: string; // Reference to User

  @IsMongoId()
  @IsOptional()
  readonly teamAId?: string; // Reference to Team

  @IsMongoId()
  @IsOptional()
  readonly teamBId?: string; // Reference to Team
}
