// challenge.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengeController } from './challenge.controller';
import { ChallengeSchema ,Challenge } from './entity/challenge.entity';
import { ChallengeService } from './challenge.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Challenge.name, schema: ChallengeSchema }])],
  providers: [ChallengeService],
  controllers: [ChallengeController],
  exports: [
    MongooseModule.forFeature([{ name: Challenge.name, schema: ChallengeSchema }]),
  ],
})
export class ChallengeModule {}
