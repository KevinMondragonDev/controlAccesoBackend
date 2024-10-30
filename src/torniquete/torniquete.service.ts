import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from '../employees/entities/employee.entity';

@Injectable()
export class TorniqueteService {
  constructor(
    
    private readonly studentsService:StudentsService,

    private readonly employeeService:EmployeesService
  ){}

  async findOne(folio: string){
    try {
      // Intenta buscar en la base de datos de estudiantes
      const {NombreCompleto , Carrera , images } = await this.studentsService.findOne(folio);
      return {NombreCompleto , Carrera , images };
    
    } catch (error) {
      // Si no se encuentra en estudiantes, ignora el error
    }
    try {
      // Intenta buscar en la base de datos de empleados
      const {NumeroDeEmpleado , Nombre , ApellidoPaterno , ApellidoMaterno , images} = await this.employeeService.findOne(folio); 
      return { NumeroDeEmpleado , Nombre , ApellidoPaterno , ApellidoMaterno , images};
      
    } catch (error) {
      throw new NotFoundException(`No student or employee found with folio "${folio}"`);// Si no se encuentra en empleados, ignora el error
    }

    
  }

}
