import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StadiumService } from './stadium.service';
import { StudiumController } from './studium.controller';
import { Stadium, StadiumSchema } from './entity/stadium.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stadium.name, schema: StadiumSchema }]),
  ],
  controllers: [StudiumController],
  providers: [StadiumService],
  exports: [
    MongooseModule.forFeature([{ name: Stadium.name, schema: StadiumSchema }]),
  ],
})
export class StadiumModule {}

