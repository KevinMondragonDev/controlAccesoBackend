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

  async update(NumeroDeEmpleado: string, updateEmployeeDto: UpdateEmployeeDto) {
    // Buscamos el empleado por su número de empleado
    const employee = await this.employeeRepository.findOneBy({ NumeroDeEmpleado });

    if (!employee) {
      throw new NotFoundException(`Employee with NumeroDeEmpleado "${NumeroDeEmpleado}" not found`);
    }

    // Asignamos los nuevos valores al empleado
    Object.assign(employee, updateEmployeeDto);

    try {
      return await this.employeeRepository.save(employee);
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
