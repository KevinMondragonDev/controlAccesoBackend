import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { EmployeeImage } from './employees-image.entity';

@Entity('employees')
export class Employee {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  NumeroDeEmpleado: string;
  
  @Column({ type: 'varchar', length: 50 , nullable: true  })
  ApellidoPaterno?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ApellidoMaterno?: string;

  @Column({ type: 'varchar', length: 50 })
  Nombre: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  Estatus?: string;

  @Column({ type: 'varchar', length: 50, nullable: true }) // Cambiado a varchar
  TipoDeContrato?: string;

  @Column({ type: 'varchar', length: 100 , nullable: true  })
  Puesto?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Nivel?: string;

  @Column({ type: 'varchar', length: 100, nullable: true  })
  Departamento?: string;

  @Column({ type: 'varchar', length: 13 , nullable: true })
  RFC?: string;

  @Column({ type: 'varchar', length: 18, nullable: true  })
  CURP?: string;

  @Column({ type: 'varchar', length: 10, nullable: true  })
  Genero?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  TituloProfesional?: string;

  @Column({ type: 'varchar', length: 50, nullable: true  })
  Estado?: string;

  @Column({ type: 'varchar', length: 50 , nullable: true })
  Municipio?: string;

  @Column({ type: 'varchar', length: 150, nullable: true  })
  Direccion?: string;

  @Column({ type: 'varchar', length: 10, nullable: true  })
  CodigoPostal?: string;

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
