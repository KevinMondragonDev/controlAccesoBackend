import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { EmployeeImage } from './employees-image.entity';

@Entity('employees')
export class Employee {

  @ApiProperty({
    example: '1003',
    description: 'Número de identificación único del empleado',
  })
  @PrimaryColumn({ type: 'varchar', length: 50 })
  NumeroDeEmpleado: string;
  
  @ApiProperty({
    example: 'LOPEZ',
    description: 'Apellido paterno del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  ApellidoPaterno?: string;

  @ApiProperty({
    example: 'MARTINEZ',
    description: 'Apellido materno del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  ApellidoMaterno?: string;

  @ApiProperty({
    example: 'MIRIAM IRLANDA',
    description: 'Nombre(s) del empleado',
  })
  @Column({ type: 'varchar', length: 50 })
  Nombre: string;

  @ApiProperty({
    example: 'ACTIVO',
    description: 'Estatus laboral del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 10, nullable: true })
  Estatus?: string;

  @ApiProperty({
    example: 'HONORARIOS PROFESIONALES',
    description: 'Tipo de contrato del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  TipoDeContrato?: string;

  @ApiProperty({
    example: 'PROFESOR DE ASIGNATURA',
    description: 'Puesto laboral del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  Puesto?: string;

  @ApiProperty({
    example: 'SECRETARIA ACADEMICA',
    description: 'Nivel jerárquico del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  Nivel?: string;

  @ApiProperty({
    example: 'SECRETARIA ACADEMICA',
    description: 'Departamento donde trabaja el empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  Departamento?: string;

  @ApiProperty({
    example: 'LOMM970929L66',
    description: 'RFC del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 13, nullable: true })
  RFC?: string;

  @ApiProperty({
    example: 'LOMM970929MGTPRR12',
    description: 'CURP del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 18, nullable: true })
  CURP?: string;

  @ApiProperty({
    example: 'MUJER',
    description: 'Género del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 10, nullable: true })
  Genero?: string;

  @ApiProperty({
    example: 'INGENIERO EN ANIMACIÓN Y EFECTOS VISUALES',
    description: 'Título profesional del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 100, nullable: true })
  TituloProfesional?: string;

  @ApiProperty({
    example: 'GUANAJUATO',
    description: 'Estado de residencia del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  Estado?: string;

  @ApiProperty({
    example: 'LEÓN',
    description: 'Municipio de residencia del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  Municipio?: string;

  @ApiProperty({
    example: 'ALBOLEDAS DE JERÉZ #214 COL. VILLA MARINA C.P. 37530 LEÓN GUANAJUATO',
    description: 'Dirección completa del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 150, nullable: true })
  Direccion?: string;

  @ApiProperty({
    example: '37530',
    description: 'Código postal de residencia del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 10, nullable: true })
  CodigoPostal?: string;

  @ApiProperty({
    example: '1004',
    description: 'Folio de credencial único del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  FolioDeCredencial?: string;

  @ApiProperty({
    example: '1005',
    description: 'Segundo folio de credencial único del empleado',
    nullable: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: true })
  FolioDeCredencial2?: string;

  @ApiProperty({
    description: 'Lista de imágenes asociadas al empleado',
    type: () => [EmployeeImage],
  })
  @OneToMany(
    () => EmployeeImage,
    (employeeImage) => employeeImage.employee,
    { cascade: true, eager: true }
  )
  images?: EmployeeImage[];
}
