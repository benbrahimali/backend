import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async editProfile(id: string, userData: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, userData, { new: true });
  }


  async getUserByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async deleteProfile(id: string) {
    return await this.userModel.findByIdAndDelete(id);
    
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('teamId').exec(); // Populate team relation
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).populate('teamId').exec(); // Populate team relation
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }
}

