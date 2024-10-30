import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @Get(':term')
  async findOne(@Param('term') term: string) {
    return this.employeesService.findOne(term);
  }

  @Patch(':NumeroDeEmpleado')  // Cambia ':id' a ':NumeroDeEmpleado'
  async update(
    @Param('NumeroDeEmpleado') NumeroDeEmpleado: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    return this.employeesService.update(NumeroDeEmpleado, updateEmployeeDto);
  }
  @Delete(':term')
  async remove(@Param('term') term: string) {
    return this.employeesService.remove(term);
  }
}
