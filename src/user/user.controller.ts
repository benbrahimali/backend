import { Controller, Body, Patch, Param, Delete, Get, Query, Request, Header } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { GetCurrentUser } from 'src/common/decorators';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Patch(':id')
  editProfile(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return this.userService.editProfile(id, userData);
  }


  @Get("/")
  getCurrentUser(@GetCurrentUser() user) {
    const user_ = this.userService.getUserByEmail(user.email);
    return user_;
  }


  @Delete(':id')
  deleteProfile(@Param('id') id: string) {
    return this.userService.deleteProfile(id);
  }




  @Get('e')
  getUserByEmail(@Query('email') email: string) {
    if (email == null) {
      return {
        'sameThings': 'wentWrong'
      }
    }

    return this.userService.getUserByEmail(email)
  }


}
