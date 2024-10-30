import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { EmployeeImage } from './employees-image.entity';

@Entity('employees')
export class Employee {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  NumeroDeEmpleado: string;

  @Column({ type: 'varchar', length: 50 })
  ApellidoPaterno: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ApellidoMaterno?: string;

  @Column({ type: 'varchar', length: 50 })
  Nombre: string;

  @Column({ type: 'varchar', length: 10 })
  TipoDeSangre: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  Estatus?: string;

  @Column({ type: 'varchar', length: 50, nullable: true }) // Cambiado a varchar
  TipoDeContrato?: string;

  @Column({ type: 'varchar', length: 100 })
  Puesto: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Nivel?: string;

  @Column({ type: 'varchar', length: 100 })
  Departamento: string;

  @Column({ type: 'date' })
  FechaDeNacimiento: Date;

  @Column({ type: 'varchar', length: 13 })
  RFC: string;

  @Column({ type: 'varchar', length: 18 })
  CURP: string;

  @Column({ type: 'varchar', length: 10 })
  Genero: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  TituloProfesional?: string;

  @Column({ type: 'varchar', length: 50 })
  Estado: string;

  @Column({ type: 'varchar', length: 50 })
  Municipio: string;

  @Column({ type: 'varchar', length: 150 })
  Direccion: string;

  @Column({ type: 'varchar', length: 10 })
  CodigoPostal: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  FolioDeCredencial?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  FolioDeCredencial2?: string;

  @OneToMany(
    () => EmployeeImage,
    (employeeImage) => employeeImage.employee,
    { cascade: true, eager: true }
  )
  images?: EmployeeImage[];
}
