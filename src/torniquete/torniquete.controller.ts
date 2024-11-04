import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TorniqueteService } from './torniquete.service';
import { Employee } from 'src/employees/entities';
import { Student } from 'src/students/entities';


@ApiTags('Torniquete')
@Controller('torniquete')
export class TorniqueteController {
  constructor(private readonly torniqueteService: TorniqueteService) {}

  @ApiResponse({ status: 200, description: 'Successfully retrieved the torniquete entry.' , example: [Student , Employee]  })
  @ApiResponse({ status: 404, description: 'Torniquete entry not found.' })
  @Get(':folio')
  findOne(@Param('folio') folio: string) {
    return this.torniqueteService.findOne(folio);
  }
}
