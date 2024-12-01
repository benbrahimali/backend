// notification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './entity/notification.entity';
import { CreateNotificationDto , UpdateNotificationDto } from './dto/notification.dto';

import { NotFoundException } from '@nestjs/common';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<Notification>,
  ) {}

  // إنشاء إشعار جديد
  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const notification = new this.notificationModel(createNotificationDto);
    return notification.save();
  }

  // تحديث إشعار
  async update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const notification = await this.notificationModel.findByIdAndUpdate(id, updateNotificationDto, { new: true });
    
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    return notification;
  }

  // جلب إشعار حسب الـ ID
  async findById(id: string): Promise<Notification> {
    const notification = await this.notificationModel.findById(id);
    
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }

    return notification;
  }

  // جلب جميع الإشعارات
  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find();
  }

  // جلب إشعارات معينة للمستخدم
  async findByUserId(userId: string): Promise<Notification[]> {
    return this.notificationModel.find({ userId });
  }
}
