import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { StudentImage } from './student-image.entity';

@Entity({ name: 'students' })
export class Student {

    @ApiProperty({
        example: '019001244',
        description: 'Matricula única del estudiante',
        uniqueItems: true
    })
    @PrimaryColumn('text', {
        unique: true,
    })
    Matricula: string;

    @ApiProperty({
        example: 'GONZALEZ GARCIA JOSUE',
        description: 'Nombre completo del estudiante',
    })
    @Column()
    NombreCompleto: string;

    @ApiProperty({
        example: '-',
        description: 'Fecha de inclusión en la base de datos',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    Inclusion: string;

    @ApiProperty({
        example: '14BIS',
        description: 'Año de generación del estudiante',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    Generacion: string;

    @ApiProperty({
        example: 'MASCULINO',
        description: 'Género del estudiante',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    Genero: string;

    @ApiProperty({
        example: 'ING. EN ANIMACION Y EFECTOS VISUALES',
        description: 'Carrera del estudiante',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    Carrera: string;

    @ApiProperty({
        example: 10,
        description: 'Cuatrimestre actual del estudiante',
        nullable: true,
    })
    @Column('int', {
        nullable: true,
    })
    Cuatrimestre: number;

    @ApiProperty({
        example: 'IAEV-29',
        description: 'Grupo al que pertenece el estudiante',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    Grupo: string;

    @ApiProperty({
        example: null,
        description: 'Folio único de credencial del estudiante, si existe',
        nullable: true,
    })
    @Column('text', {
        unique: true,
        nullable: true,
    })
    FolioDeCredencial: string;

    @ApiProperty({
        example: '20',
        description: 'Segundo folio único de credencial del estudiante, si aplica',
        nullable: true,
    })
    @Column('text', {
        unique: true,
        nullable: true,
    })
    FolioDeCredencial2: string;

    @ApiProperty({
        example: 'NO IMPRIMIR',
        description: 'Estado de impresión de la credencial del estudiante',
        nullable: true,
    })
    @Column('text', {
        nullable: true,
    })
    EstatusDeImpresion: string;

    @ApiProperty({
        example: true,
        description: 'Estatus actual del estudiante (activo/inactivo)',
        nullable: true,
    })
    @Column('boolean', {
        nullable: true,
    })
    Estatus: boolean;

    @ApiProperty({
        description: 'Lista de imágenes asociadas al estudiante',
        type: () => [StudentImage],
    })
    @OneToMany(
        () => StudentImage,
        (studentImage) => studentImage.student,
        { cascade: true, eager: false }
    )
    images?: StudentImage[];

    // Si 'imagenes' es un campo adicional en tu entidad, se agrega como propiedad
    @ApiProperty({
        description: 'Lista de imágenes adicionales',
        type: () => [StudentImage],
        nullable: true,
    })
    imagenes?: StudentImage[];

    @BeforeInsert()
    checkSlugUpdate() {
        this.NombreCompleto = this.normalizeString(this.NombreCompleto);
        this.Generacion = this.normalizeString(this.Generacion);
        this.Genero = this.normalizeString(this.Genero);
        this.Carrera = this.normalizeString(this.Carrera);
        this.EstatusDeImpresion = this.normalizeString(this.EstatusDeImpresion);
    }

    private normalizeString(input: string): string {
        return input
            .toUpperCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }
}
