import { IsString, IsOptional, IsDateString, Matches, Length } from 'class-validator';

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
  @Length(3, 10) // Longitud de sangre ajustada
  TipoDeSangre: string;

  @IsOptional()
  @IsString()
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
  @Matches(/^[A-Z]{3,4}0\d{2}([A-Z]|[0-9]){2}[A-Z0-9]{3}$/) // RFC pattern
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
  FolioDeCredencial?: string;

  @IsOptional()
  @IsString()
  FolioDeCredencial2?: string;
}