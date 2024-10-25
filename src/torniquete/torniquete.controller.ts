import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TorniqueteService } from './torniquete.service';
import { CreateTorniqueteDto } from './dto/create-torniquete.dto';
import { UpdateTorniqueteDto } from './dto/update-torniquete.dto';

@Controller('torniquete')
export class TorniqueteController {
  constructor(private readonly torniqueteService: TorniqueteService) {}

  @Get(':folio')
  findOne(@Param('folio') folio: string) {
    return this.torniqueteService.findOne(folio);
  }

}
