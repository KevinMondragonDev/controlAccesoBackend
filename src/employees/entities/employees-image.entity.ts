import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'employee_images' })
export class EmployeeImage {
  @ApiProperty({
    example: 1,
    description: 'Identificador único de la imagen del empleado',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'URL de la imagen del empleado',
  })
  @Column('text')
  url: string;

  @ApiProperty({
    description: 'Empleado al que pertenece esta imagen',
    type: () => Employee, // Para referenciar el tipo Employee
  })
  @ManyToOne(
    () => Employee,
    (employee) => employee.images,
    { onDelete: 'CASCADE' }
  )
  employee: Employee;
}
