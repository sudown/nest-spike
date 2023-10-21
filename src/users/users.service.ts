import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    this.logger.log('This is an error message');
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `User #${id} has been updated to ${updateUserDto.email} with email ${updateUserDto.email}`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
