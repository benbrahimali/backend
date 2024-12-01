import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { Stadium } from './entity/stadium.entity';

@Injectable()
export class StadiumService {
  constructor(@InjectModel(Stadium.name) private stadiumModel: Model<Stadium>) {}

  async create(createStadiumDto: CreateStadiumDto): Promise<Stadium> {
    const stadium = new this.stadiumModel(createStadiumDto);
    return stadium.save();
  }

  async findAll(): Promise<Stadium[]> {
    return this.stadiumModel.find().exec();
  }

  async findById(id: string): Promise<Stadium> {
    const stadium = await this.stadiumModel.findById(id).exec();
    if (!stadium) {
      throw new NotFoundException(`Stadium with ID ${id} not found`);
    }
    return stadium;
  }

  async update(id: string, updateStadiumDto: UpdateStadiumDto): Promise<Stadium> {
    const updatedStadium = await this.stadiumModel
      .findByIdAndUpdate(id, updateStadiumDto, { new: true, runValidators: true })
      .exec();
    if (!updatedStadium) {
      throw new NotFoundException(`Stadium with ID ${id} not found`);
    }
    return updatedStadium;
  }
  async deleteById(id: string): Promise<void> {
    const result = await this.stadiumModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Stadium with ID ${id} not found`);
    }
  }
}
