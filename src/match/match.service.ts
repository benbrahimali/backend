import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from './entity/match.entity';
import { CreateMatchDto, UpdateMatchDto } from './dto/match.dto';
import { NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode'; 

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<Match>,
  ) {}

  // إضافة مباراة جديدة
  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    const match = new this.matchModel(createMatchDto);
    
    // قم بتوليد UUID للمباراة وتخزينه
    const matchId = uuidv4();
    match['_id'] = matchId; // أو يمكنك تخزين هذا داخل الحقل المخصص إذا كنت بحاجة.
    
    // يمكنك الآن توليد رابط الـ QR الذي سيُستخدم للانضمام إلى المباراة
    const qrCodeLink = `http://localhost:4000/match/join/${matchId}`;
    
    // توليد الـ QR Code
    const qrCode = await QRCode.toDataURL(qrCodeLink);

    // قم بتخزين رابط الـ QR Code في المباراة أو إرساله للمستخدم
    match.qrCodeImage = qrCode;  // أضف خاصية qrCode في الـ Match entity 

    return match.save();
  }

  // تحديث مباراة
  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<Match> {
    const match = await this.matchModel.findByIdAndUpdate(id, updateMatchDto, {
      new: true,
    }).populate('stadiumId').populate('organizerId').populate('teamAId').populate('teamBId');

    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    return match;
  }

  // جلب مباراة حسب الـ ID مع البيانات المرتبطة
  async findById(id: string): Promise<Match> {
    const match = await this.matchModel
      .findById(id)
      .populate('stadiumId')
      .populate('organizerId')
      .populate('teamAId')
      .populate('teamBId');
    
    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    return match;
  }

  // جلب جميع المباريات مع البيانات المرتبطة
  async findAll(): Promise<Match[]> {
    return this.matchModel
      .find()
      .populate('stadiumId')
      .populate('organizerId')
      .populate('teamAId')
      .populate('teamBId');
  }

  // إنشاء QR Code للانضمام إلى المباراة
  async generateQRCodeForMatch(id: string): Promise<string> {
    const match = await this.findById(id);  // جلب المباراة باستخدام ID

    const qrCodeLink = `http://your-app-url/match/join/${id}`;
    const qrCode = await QRCode.toDataURL(qrCodeLink);
    
    return qrCode; // إرجاع الـ QR Code كـ data URL
  }
}
