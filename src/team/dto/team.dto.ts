// team.dto.ts
import { IsString, IsNotEmpty, IsArray, IsOptional, IsMongoId } from 'class-validator';

// team.dto.ts
export class CreateTeamDto {
  readonly name: string;
  readonly captainId: string; // Reference to User
  readonly members?: string[]; // Array of User IDs
}

export class UpdateTeamDto {
  readonly name?: string;
  readonly captainId?: string; // Reference to User
  readonly members?: string[]; // Array of User IDs
}

export class AddMemberDto {
  readonly userId: string; // ID of the member to be added
}
