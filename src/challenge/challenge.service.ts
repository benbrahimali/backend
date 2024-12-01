import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Challenge } from './entity/challenge.entity';
import { CreateChallengeDto, UpdateChallengeDto } from './dto/challenge.dto';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel(Challenge.name) private challengeModel: Model<Challenge>,
  ) {}

  // إضافة تحدي جديد
  async create(createChallengeDto: CreateChallengeDto): Promise<Challenge> {
    const challenge = new this.challengeModel(createChallengeDto);
    return challenge.save();
  }

  // تحديث التحدي
  async update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<Challenge> {
    const challenge = await this.challengeModel.findByIdAndUpdate(id, updateChallengeDto, {
      new: true,
    }).populate('teamAId').populate('teamBId').populate('matchId');
    
    if (!challenge) {
      throw new NotFoundException(`Challenge with ID ${id} not found`);
    }
    return challenge;
  }

  // جلب تحدي حسب الـ ID
  async findById(id: string): Promise<Challenge> {
    const challenge = await this.challengeModel
      .findById(id)
      .populate('teamAId')
      .populate('teamBId')
      .populate('matchId');
    
    if (!challenge) {
      throw new NotFoundException(`Challenge with ID ${id} not found`);
    }
    return challenge;
  }

  // جلب جميع التحديات
  async findAll(): Promise<Challenge[]> {
    return this.challengeModel
      .find()
      .populate('teamAId')
      .populate('teamBId')
      .populate('matchId');
  }
}
