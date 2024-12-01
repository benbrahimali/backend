import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDto, UpdateChallengeDto } from './dto/challenge.dto';
import { Challenge } from './entity/challenge.entity';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  // إضافة تحدي جديد
  @Post()
  async create(@Body() createChallengeDto: CreateChallengeDto): Promise<Challenge> {
    return this.challengeService.create(createChallengeDto);
  }

  // تحديث تحدي موجود
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ): Promise<Challenge> {
    return this.challengeService.update(id, updateChallengeDto);
  }

  // جلب تحدي حسب الـ ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Challenge> {
    return this.challengeService.findById(id);
  }

  // جلب جميع التحديات
  @Get()
  async findAll(): Promise<Challenge[]> {
    return this.challengeService.findAll();
  }
}
