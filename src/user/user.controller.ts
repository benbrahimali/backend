import { Controller, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import path from 'path';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':id')
  editProfile(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return this.userService.editProfile(id, userData);
  }

  @Delete(':id')
  deleteProfile(@Param('id') id: string) {
    return this.userService.deleteProfile(id);
  }
}
