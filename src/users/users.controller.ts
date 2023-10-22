import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneParams } from './dto/FindOneParams.dto';
// import { Logger } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    // this.logger.log('Esta é uma mensagem de log.');
    // this.logger.error('Esta é uma mensagem de erro.');
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return `This action returns #${params.id} user`;
  }

  @Put(':id')
  update(@Param() params: FindOneParams, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(params.id, updateUserDto);
  }
}
