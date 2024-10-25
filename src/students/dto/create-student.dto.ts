import { IsArray, IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateStudentDto {

    @IsUUID()
    @IsOptional()  // Opcional porque será generado automáticamente
    id_alumno?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    Matricula: string;

    @IsString()
    @IsNotEmpty()
    NombreCompleto: string;

    @IsBoolean()
    @IsNotEmpty()
    Inclusion: boolean;

    @IsString()
    @IsNotEmpty()
    Generacion: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['FEMENINO','MASCULINO'])
    Genero: string;

    @IsString()
    @IsNotEmpty()
    Carrera: string;

    @IsInt()
    @IsNotEmpty()
    Cuatrimestre: number;

    @IsString()
    @IsNotEmpty()
    Grupo: string;

    @IsString()
    @IsOptional()
    @MinLength(10) // Opcional porque puede ser nulo
    FolioDeCredencial?: string;

    @IsString()
    @IsOptional()  // Opcional porque puede ser nulo
    FolioDeCredencial2?: string;

    @IsString()
    @IsOptional()
    Comentario?: string;

    @IsString()
    @IsIn(['REVISAR', 'IMPRESA', 'NO IMPRIMIR'])
    EstatusDeImpresion: string;

    @IsBoolean()
    @IsNotEmpty()
    Estatus: boolean;

    @IsString({ each:true})
    @IsArray()
    @IsOptional()
    images? :string[];
}


