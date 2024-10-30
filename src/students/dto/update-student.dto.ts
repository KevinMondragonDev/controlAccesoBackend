import { IsBoolean, IsOptional, IsString, IsNumber, IsArray, IsIn, MinLength } from 'class-validator';

export class UpdateStudentDto {

    @IsOptional()
    @IsNumber()
    Cuatrimestre?: number; // Cuatrimestre, tipo numérico

    @IsOptional()
    @IsString()
    @MinLength(8)
    FolioDeCredencial?: string; // FolioDeCredencial

    @IsOptional()
    @IsString()
    FolioDeCredencial2?: string | null; // FolioDeCredencial2 puede ser null

    @IsOptional()
    @IsString()
    @IsIn(['REVISAR', 'IMPRESA', 'NO IMPRIMIR'])
    EstatusDeImpresion?: string; // EstatusDeImpresion

    @IsOptional()
    @IsBoolean()
    Estatus?: boolean; // Estatus

    @IsOptional()
    @IsArray()
    @IsString({ each:true})
    images?: string[]; // Suponiendo que las imágenes son URLs
}

    

