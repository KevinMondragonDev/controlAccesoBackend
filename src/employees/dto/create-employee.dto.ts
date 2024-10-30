import { IsString, IsOptional, IsDateString, Matches, Length, MinLength, IsIn } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  NumeroDeEmpleado: string;

  @IsString()
  ApellidoPaterno: string;

  @IsOptional()
  @IsString()
  ApellidoMaterno?: string;

  @IsString()
  Nombre: string;

  @IsString()
  @IsOptional() // Longitud de sangre ajustada
  TipoDeSangre?: string;

  @IsOptional()
  @IsString()
  @IsIn(["ACTIVO", "INACTIVO"])
  Estatus?: string;

  @IsOptional()
  @IsString()
  TipoDeContrato?: string;

  @IsString()
  Puesto: string;

  @IsOptional()
  @IsString()
  Nivel?: string;

  @IsString()
  Departamento: string;

  @IsDateString()
  FechaDeNacimiento: string;

  @IsString()
  RFC: string;

  @IsString()
  @Matches(/[A-Z]{4}[0-9]{6}[A-Z0-9]{3}/) // CURP pattern
  CURP: string;

  @IsString()
  Genero: string;

  @IsOptional()
  @IsString()
  TituloProfesional?: string;

  @IsString()
  Estado: string;

  @IsString()
  Municipio: string;

  @IsString()
  Direccion: string;

  @IsString()
  @Matches(/^\d{5}$/) // Validación para Código Postal
  CodigoPostal: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  FolioDeCredencial?: string;

  @IsOptional()
  @IsString()
  FolioDeCredencial2?: string;
}