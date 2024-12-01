// notification.controller.ts
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto, UpdateNotificationDto } from './dto/notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // إنشاء إشعار جديد
  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  // تحديث إشعار
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  // جلب إشعار حسب الـ ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.notificationService.findById(id);
  }

  // جلب جميع الإشعارات
  @Get()
  async findAll() {
    return this.notificationService.findAll();
  }

  // جلب إشعارات معينة للمستخدم
  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return this.notificationService.findByUserId(userId);
  }
}
