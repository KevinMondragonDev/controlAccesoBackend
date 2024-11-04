import { IsArray, IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  
    @ApiProperty({
        example: '019001244',
        description: 'Matrícula del estudiante, debe tener al menos 7 caracteres',
        minLength: 7,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    Matricula: string;

    @ApiProperty({
        example: 'GONZALEZ GARCIA JOSUE',
        description: 'Nombre completo del estudiante',
    })
    @IsString()
    @IsNotEmpty()
    NombreCompleto: string;

    @ApiProperty({
        example: '-',
        description: 'Inclusion del estudiante (opcional)',
        required: false,
    })
    @IsString()
    @IsOptional()
    Inclusion: string;

    @ApiProperty({
        example: '14BIS',
        description: 'Generación del estudiante',
    })
    @IsString()
    @IsNotEmpty()
    Generacion: string;

    @ApiProperty({
        example: 'MASCULINO',
        description: 'Género del estudiante, debe ser FEMENINO o MASCULINO',
        enum: ['FEMENINO', 'MASCULINO'],
    })
    @IsString()
    @IsNotEmpty()
    @IsIn(['FEMENINO', 'MASCULINO'])
    Genero: string;

    @ApiProperty({
        example: 'ING. EN ANIMACION Y EFECTOS VISUALES',
        description: 'Carrera del estudiante',
    })
    @IsString()
    @IsNotEmpty()
    Carrera: string;

    @ApiProperty({
        example: 10,
        description: 'Cuatrimestre del estudiante',
    })
    @IsInt()
    @IsNotEmpty()
    Cuatrimestre: number;

    @ApiProperty({
        example: 'IAEV-29',
        description: 'Grupo del estudiante',
    })
    @IsString()
    @IsNotEmpty()
    Grupo: string;

    @ApiProperty({
        example: '1004',
        description: 'Folio de credencial del estudiante (opcional)',
        required: false,
        minLength: 8,
    })
    @IsString()
    @IsOptional()
    @MinLength(8) // Opcional porque puede ser nulo
    FolioDeCredencial?: string;

    @ApiProperty({
        example: '20',
        description: 'Folio de credencial 2 del estudiante (opcional)',
        required: false,
    })
    @IsString()
    @IsOptional()  // Opcional porque puede ser nulo
    FolioDeCredencial2?: string;

    @ApiProperty({
        example: 'NO IMPRIMIR',
        description: 'Estatus de impresión del estudiante, debe ser REVISAR, IMPRESA o NO IMPRIMIR',
        enum: ['REVISAR', 'IMPRESA', 'NO IMPRIMIR'],
    })
    @IsString()
    @IsIn(['REVISAR', 'IMPRESA', 'NO IMPRIMIR'])
    EstatusDeImpresion: string;

    @ApiProperty({
        example: true,
        description: 'Estatus del estudiante (activo o inactivo)',
    })
    @IsBoolean()
    @IsNotEmpty()
    Estatus: boolean;

    @ApiProperty({
        example: ['http://image1.jpg', 'http://image2.jpg'],
        description: 'Imágenes del estudiante (opcional)',
        type: [String],
        required: false,
    })
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];
}
