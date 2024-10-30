// dto/update-employee.dto.ts
import { IsOptional, IsString, IsDate, IsBoolean, IsIn } from 'class-validator';

export class UpdateEmployeeDto {

  @IsOptional()
  @IsString()
  @IsIn(["ACTIVO", "INACTIVO"])
  Estatus?: string;

  @IsOptional()
  @IsString()
  FolioDeCredencial?: string;

  @IsOptional()
  @IsString()
  FolioDeCredencial2?: string;

  // Si necesitas manejar imágenes, puedes añadir un campo para ello.
  // @IsOptional()
  // images?: EmployeeImage[];
}
