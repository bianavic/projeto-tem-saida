import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

import { BaseController } from './base.controller';
import { CreateUserDTO } from '../dto/user.dto';

@Controller('users')
export class UserController extends BaseController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO): Promise<any> {
    return this.userService.create(createUserDTO);
  }

  @Get('/profiles')
  getProfiles() {
    return this.userService.getProfiles();
  }
}
