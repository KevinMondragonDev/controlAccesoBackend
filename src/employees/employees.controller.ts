import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Employee } from './entities';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @ApiResponse({ status: 201, description: 'Employee created successfully', type: CreateEmployeeDto })
  @ApiResponse({ status: 400, description: 'Bad request due to invalid input' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @ApiResponse({ status: 200, description: 'List of employees retrieved successfully', type: [Employee] })
  @ApiResponse({ status: 400, description: 'Bad request due to invalid input' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @ApiResponse({ status: 200, description: 'Employee found', type: Employee })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 400, description: 'Bad request due to invalid input' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Get(':term')
  async findOne(@Param('term') term: string) {
    return this.employeesService.findOne(term);
  }

  @ApiResponse({ status: 200, description: 'Employee updated successfully', type: Employee })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 400, description: 'Bad request due to invalid input' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Patch(':NumeroDeEmpleado') // Cambia ':id' a ':NumeroDeEmpleado'
  async update(
    @Param('NumeroDeEmpleado') NumeroDeEmpleado: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    return this.employeesService.update(NumeroDeEmpleado, updateEmployeeDto);
  }

  @ApiResponse({ status: 200, description: 'Employee removed successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Delete(':term')
  async remove(@Param('term') term: string) {
    return this.employeesService.remove(term);
  }
}
