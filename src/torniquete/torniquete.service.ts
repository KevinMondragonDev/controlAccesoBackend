import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTorniqueteDto } from './dto/create-torniquete.dto';
import { UpdateTorniqueteDto } from './dto/update-torniquete.dto';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsService } from 'src/students/students.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Student } from 'src/students/entities';
import { Employee } from '../employees/entities/employee.entity';
import { error } from 'console';

@Injectable()
export class TorniqueteService {
  constructor(
    
    private readonly studentsService:StudentsService,

    private readonly employeeService:EmployeesService
  ){}

  async findOne(folio: string): Promise<boolean> {
    try {
      // Intenta buscar en la base de datos de estudiantes
      await this.studentsService.findOne(folio);
      return true; // Si encuentra un estudiante
    } catch (error) {
      // Si no se encuentra en estudiantes, ignora el error
    }

    try {
      // Intenta buscar en la base de datos de empleados
      await this.employeeService.findOne(folio);
      return true; // Si encuentra un empleado
    } catch (error) {
      throw new NotFoundException(`No student or employee found with folio "${folio}"`);// Si no se encuentra en empleados, ignora el error
    }

    // Si ninguno de los dos existe, lanza NotFoundException
    
  }

}
