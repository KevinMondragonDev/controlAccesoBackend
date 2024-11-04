import { IsString, IsOptional, IsDateString, Matches, Length, MinLength, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: '1003',
    description: 'Número de empleado único',
  })
  @IsString()
  NumeroDeEmpleado: string;

  @ApiProperty({
    example: 'LOPEZ',
    description: 'Apellido paterno del empleado',
  })
  @IsString()
  ApellidoPaterno: string;

  @ApiProperty({
    example: 'MARTINEZ',
    description: 'Apellido materno del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  ApellidoMaterno?: string;

  @ApiProperty({
    example: 'MIRIAM IRLANDA',
    description: 'Nombre del empleado',
  })
  @IsString()
  Nombre: string;

  @ApiProperty({
    example: 'O+',
    description: 'Tipo de sangre del empleado',
    required: false,
  })
  @IsString()
  @IsOptional()
  TipoDeSangre?: string;

  @ApiProperty({
    example: 'ACTIVO',
    description: 'Estado del empleado (ACTIVO o INACTIVO)',
    required: false,
    enum: ['ACTIVO', 'INACTIVO'],
  })
  @IsOptional()
  @IsString()
  @IsIn(['ACTIVO', 'INACTIVO'])
  Estatus?: string;

  @ApiProperty({
    example: 'HONORARIOS PROFESIONALES',
    description: 'Tipo de contrato del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  TipoDeContrato?: string;

  @ApiProperty({
    example: 'PROFESOR DE ASIGNATURA',
    description: 'Puesto del empleado',
  })
  @IsString()
  Puesto: string;

  @ApiProperty({
    example: 'SECRETARIA ACADEMICA',
    description: 'Nivel del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  Nivel?: string;

  @ApiProperty({
    example: 'SECRETARIA ACADEMICA',
    description: 'Departamento del empleado',
  })
  @IsString()
  Departamento: string;

  @ApiProperty({
    example: '1980-01-01',
    description: 'Fecha de nacimiento del empleado en formato YYYY-MM-DD',
  })
  @IsDateString()
  FechaDeNacimiento: string;

  @ApiProperty({
    example: 'LOMM970929L66',
    description: 'Registro Federal de Contribuyentes del empleado',
  })
  @IsString()
  RFC: string;

  @ApiProperty({
    example: 'LOMM970929MGTPRR12',
    description: 'Clave Única de Registro de Población del empleado',
  })
  @IsString()
  @Matches(/[A-Z]{4}[0-9]{6}[A-Z0-9]{3}/)
  CURP: string;

  @ApiProperty({
    example: 'MUJER',
    description: 'Género del empleado',
  })
  @IsString()
  Genero: string;

  @ApiProperty({
    example: 'INGENIERO EN ANIMACIÓN Y EFECTOS VISUALES',
    description: 'Título profesional del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  TituloProfesional?: string;

  @ApiProperty({
    example: 'GUANAJUATO',
    description: 'Estado donde reside el empleado',
  })
  @IsString()
  Estado: string;

  @ApiProperty({
    example: 'LEÓN',
    description: 'Municipio donde reside el empleado',
  })
  @IsString()
  Municipio: string;

  @ApiProperty({
    example: 'ALBOLEDAS DE JERÉZ #214 COL. VILLA MARINA C.P. 37530 LEÓN GUANAJUATO',
    description: 'Dirección del empleado',
  })
  @IsString()
  Direccion: string;

  @ApiProperty({
    example: '37530',
    description: 'Código Postal del empleado'
  })
  @IsString()
  @Matches(/^\d{5}$/)
  CodigoPostal: string;

  @ApiProperty({
    example: '1004',
    description: 'Folio de credencial del empleado',
    required: false,
    minLength: 8,
  })
  @IsOptional()
  @IsString()
  @MinLength(8)
  FolioDeCredencial?: string;

  @ApiProperty({
    example: '1005',
    description: 'Folio de credencial adicional del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  FolioDeCredencial2?: string;
}
