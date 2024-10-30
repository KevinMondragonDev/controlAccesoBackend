import { IsArray, IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    Matricula: string;

    @IsString()
    @IsNotEmpty()
    NombreCompleto: string;

    @IsString()
    @IsOptional()
    Inclusion: string;

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
    @MinLength(8) // Opcional porque puede ser nulo
    FolioDeCredencial?: string;

    @IsString()
    @IsOptional()  // Opcional porque puede ser nulo
    FolioDeCredencial2?: string;


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


