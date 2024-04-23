import { PartialType } from '@nestjs/swagger';
import { CreateInsigniaDto } from './create-insignia.dto';

export class UpdateInsigniaDto extends PartialType(CreateInsigniaDto) {}
