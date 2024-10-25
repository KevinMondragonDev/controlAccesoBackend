import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository, DataSource } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(createEmployeeDto);
      await this.employeeRepository.save(employee);
      return employee;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async findAll(paginationDTO: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDTO;

    const employees = await this.employeeRepository.find({
      take: limit,
      skip: offset,
    });

    return employees;
  }

  async findOne(term: string) {
    let employee: Employee;

    // Buscando por Número de Empleado
    
    employee = await this.employeeRepository.findOneBy({ FolioDeCredencial: term });
    if(employee === null){
      employee = await this.employeeRepository.findOneBy({ NumeroDeEmpleado: term });
      
    }
    if (!employee) {
      throw new NotFoundException(`Employee with term "${term}" not found`);
    }

    return employee;
  }


  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.preload({
      id,
      ...updateEmployeeDto,
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID "${id}" not found`);
    }

    try {
      await this.employeeRepository.save(employee);
      return employee;
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async remove(term: string) {
    const { affected } = await this.employeeRepository.delete({ NumeroDeEmpleado: term });

    if (affected === 0) {
      throw new NotFoundException(`Employee with term "${term}" not found`);
    }

    return `Employee with ${term} has been deleted from the database`;
  }
}
