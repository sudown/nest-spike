import { PartialType } from '@nestjs/swagger';
import { CreateCursaDto } from './create-cursa.dto';

export class UpdateCursaDto extends PartialType(CreateCursaDto) {}
