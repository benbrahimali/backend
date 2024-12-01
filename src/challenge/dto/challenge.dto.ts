// challenge.dto.ts
import { IsMongoId, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateChallengeDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly teamAId: string; // ID of team A

  @IsMongoId()
  @IsNotEmpty()
  readonly teamBId: string; // ID of team B

  @IsDate()
  @IsNotEmpty()
  readonly date: Date; // تحدد تاريخ المباراة

  @IsOptional()
  readonly status?: string; // pending, accepted, completed

  @IsMongoId()
  @IsOptional()
  readonly matchId?: string; // ID of the related match (optional)
}
export class UpdateChallengeDto {
  @IsMongoId()
  @IsOptional()
  readonly teamAId?: string; // ID of team A

  @IsMongoId()
  @IsOptional()
  readonly teamBId?: string; // ID of team B

  @IsDate()
  @IsOptional()
  readonly date?: Date; // تحدد تاريخ المباراة

  @IsOptional()
  readonly status?: string; // pending, accepted, completed

  @IsMongoId()
  @IsOptional()
  readonly matchId?: string; // ID of the related match (optional)
}

