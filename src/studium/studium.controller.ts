import { Body, Controller, Get, Post ,Patch ,Param ,Delete} from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { StadiumService } from './stadium.service';

@Controller('stadiums')
export class StudiumController {
  constructor(private readonly stadiumService: StadiumService) {}

  @Post('')
  async createStadium(@Body() createStadiumDto: CreateStadiumDto) {
    return this.stadiumService.create(createStadiumDto);
  }

  @Get()
  async getAllStadiums() {
    return this.stadiumService.findAll();
  }

  @Get(':id')
  async getStadiumById(@Param('id') id: string) {
    return this.stadiumService.findById(id);
  }

  @Patch(':id')
  async updateStadium(
    @Param('id') id: string,
    @Body() updateStadiumDto: UpdateStadiumDto,
  ) {
    return this.stadiumService.update(id, updateStadiumDto);
  }
  @Delete(':id')
  async deleteStadium(@Param('id') id: string): Promise<{ message: string }> {
    await this.stadiumService.deleteById(id);
    return { message: `Stadium with ID ${id} has been deleted successfully` };
  }
}
