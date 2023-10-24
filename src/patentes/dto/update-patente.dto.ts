import { PartialType } from '@nestjs/swagger';
import { CreatePatenteDto } from './create-patente.dto';

export class UpdatePatenteDto extends PartialType(CreatePatenteDto) {}
