import { Module } from '@nestjs/common';
import { TorniqueteService } from './torniquete.service';
import { TorniqueteController } from './torniquete.controller';
import { StudentsService } from 'src/students/students.service';
import { EmployeesService } from 'src/employees/employees.service';
import { StudentsModule } from 'src/students/students.module';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  controllers: [TorniqueteController],
  providers: [TorniqueteService],
  imports:[StudentsModule, EmployeesModule]
})
export class TorniqueteModule {}
