// team.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Team } from './entity/team.entity';
import { CreateTeamDto, UpdateTeamDto } from './dto/team.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<Team>,
    @InjectModel(User.name) private readonly userModel: Model<User>, // استيراد موديل المستخدم
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const newTeam = new this.teamModel(createTeamDto);
    return newTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().populate('captainId members').exec(); // Populate captain and members
  }

  async findOne(id: string): Promise<Team> {
    return this.teamModel.findById(id).populate('captainId members').exec(); // Populate captain and members
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true }).exec();
  }

  async addMember(teamId: string, userId: string): Promise<Team> {
    const team = await this.teamModel.findById(teamId);
    if (!team) {
      throw new Error('Team not found');
    }
if (!team.members.includes(new Types.ObjectId(userId))) {
      team.members.push(new Types.ObjectId(userId));
    }
    return team.save();
  }
  async removeMember(teamId: string, userId: string): Promise<Team> {
    const team = await this.teamModel.findById(teamId);
    if (!team) {
      throw new NotFoundException('Team not found');
    }

    // التأكد من أن العضو موجود في الفريق
    const memberIndex = team.members.findIndex((member) => member.toString() === userId);
    if (memberIndex === -1) {
      throw new NotFoundException('User is not a member of the team');
    }

    // إزالة العضو من الفريق
    team.members.splice(memberIndex, 1);
    return team.save();  // حفظ التغييرات
  }
}

