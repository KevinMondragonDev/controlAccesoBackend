import { PartialType } from '@nestjs/mapped-types';
import { CreateTorniqueteDto } from './create-torniquete.dto';

export class UpdateTorniqueteDto extends PartialType(CreateTorniqueteDto) {}
