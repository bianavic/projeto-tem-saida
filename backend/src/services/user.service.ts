import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class UserService extends BaseService {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  create(createUserDTO: CreateUserDTO): Promise<any> {
    return this.userRepository.create(createUserDTO);
  }

  getProfiles() {
    return this.userRepository.getProfiles();
  }
}
