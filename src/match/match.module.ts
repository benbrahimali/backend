// match.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { Match, MatchSchema } from './entity/match.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }])],
  providers: [MatchService],
  controllers: [MatchController],
  exports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
  ],
})
export class MatchModule {}
