import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './entity/team.entity';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
    UserModule
  ],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
})
export class TeamModule {}