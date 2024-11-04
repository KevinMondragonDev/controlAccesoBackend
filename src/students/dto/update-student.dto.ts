import { IsBoolean, IsOptional, IsString, IsNumber, IsArray, IsIn, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto {

    @ApiProperty({
        example: 10,
        description: 'Cuatrimestre del estudiante (opcional)',
        required: false,
        type: Number,
    })
    @IsOptional()
    @IsNumber()
    Cuatrimestre?: number; // Cuatrimestre, tipo numérico

    @ApiProperty({
        example: '1004',
        description: 'Folio de credencial del estudiante (opcional), debe tener al menos 8 caracteres',
        required: false,
        minLength: 8,
    })
    @IsOptional()
    @IsString()
    @MinLength(8)
    FolioDeCredencial?: string; // FolioDeCredencial

    @ApiProperty({
        example: '20',
        description: 'Folio de credencial 2 del estudiante (opcional), puede ser null',
        required: false,
        nullable: true,
    })
    @IsOptional()
    @IsString()
    FolioDeCredencial2?: string | null; // FolioDeCredencial2 puede ser null

    @ApiProperty({
        example: 'NO IMPRIMIR',
        description: 'Estatus de impresión del estudiante (opcional), debe ser REVISAR, IMPRESA o NO IMPRIMIR',
        required: false,
        enum: ['REVISAR', 'IMPRESA', 'NO IMPRIMIR'],
    })
    @IsOptional()
    @IsString()
    @IsIn(['REVISAR', 'IMPRESA', 'NO IMPRIMIR'])
    EstatusDeImpresion?: string; // EstatusDeImpresion

    @ApiProperty({
        example: true,
        description: 'Estatus del estudiante (opcional), indica si está activo o inactivo',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    Estatus?: boolean; // Estatus

    @ApiProperty({
        example: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
        description: 'Imágenes del estudiante (opcional), suponiendo que son URLs',
        required: false,
        type: [String],
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    images?: string[]; // Suponiendo que las imágenes son URLs
}
