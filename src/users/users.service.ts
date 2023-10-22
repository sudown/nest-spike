import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as winston from 'winston';

@Injectable()
export class UsersService {
  constructor(@Inject('Logger') private readonly logger: winston.Logger) {}
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    this.logger.log('info', 'Esta é uma mensagem de log.');
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
