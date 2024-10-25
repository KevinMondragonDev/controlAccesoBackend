import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, EmployeeImage } from './entities';

@Module({
  controllers: [EmployeesController],
  imports:[
    TypeOrmModule.forFeature([Employee , EmployeeImage])
  ],
  providers: [EmployeesService],
})
export class EmployeesModule {}
