// team.controller.ts

import { Team } from './entity/team.entity';

// team.controller.ts
import { Controller, Get, Post, Put, Param, Body,Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto, UpdateTeamDto, AddMemberDto } from './dto/team.dto';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Post(':id/add-member')
  addMember(@Param('id') teamId: string, @Body() addMemberDto: AddMemberDto) {
    return this.teamService.addMember(teamId, addMemberDto.userId);
  }
  @Delete(':teamId/members/:userId')
  async removeMember(
    @Param('teamId') teamId: string,
    @Param('userId') userId: string,
  ) {
    return this.teamService.removeMember(teamId, userId);
  }
}
