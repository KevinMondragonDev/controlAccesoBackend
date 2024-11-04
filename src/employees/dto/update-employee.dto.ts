
import { IsOptional, IsString, IsBoolean, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  
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
    example: '1004',
    description: 'Folio de credencial del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  FolioDeCredencial?: string;

  @ApiProperty({
    example: '1005',
    description: 'Folio de credencial adicional del empleado',
    required: false,
  })
  @IsOptional()
  @IsString()
  FolioDeCredencial2?: string;

  // Si decides manejar imágenes, puedes añadir un campo para ello.
  // @ApiProperty({
  //   type: [EmployeeImage],
  //   description: 'Imágenes relacionadas con el empleado',
  //   required: false,
  // })
  // @IsOptional()
  // images?: EmployeeImage[];
}
