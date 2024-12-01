// match.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto, UpdateMatchDto } from './dto/match.dto';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  // إضافة مباراة جديدة
  @Post()
  async create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  // تحديث مباراة
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(id, updateMatchDto);
  }

  // جلب مباراة حسب الـ ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.matchService.findById(id);
  }

  // جلب جميع المباريات
  @Get()
  async findAll() {
    return this.matchService.findAll();
  }
  @Get('join/:id')
  async generateQRCode(@Param('id') id: string): Promise<string> {
    return this.matchService.generateQRCodeForMatch(id);
  }
}
