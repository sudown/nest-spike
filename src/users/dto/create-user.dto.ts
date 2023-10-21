import { IsEmail, IsStrongPassword, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
