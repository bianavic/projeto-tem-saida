import { Injectable } from '@nestjs/common';

import { BaseRepository } from './base.repository';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from 'src/dto/user.dto';
import { IUser } from 'src/schemas/user.schema';
import { IUserProfile } from 'src/schemas/user_profile.schema';

@Injectable()
export class UserRepository extends BaseRepository {
  constructor(
    @InjectModel('user') private readonly userModel: Model<IUser>,
    @InjectModel('user_profile')
    private readonly userProfileModel: Model<IUserProfile>,
  ) {
    super();
  }

  async create(createUserDTO: CreateUserDTO): Promise<any> {
    const createdUser = new this.userModel(createUserDTO);
    return await createdUser.save();
  }

  async getProfiles(): Promise<any> {
    return await this.userProfileModel.find();
  }
}
