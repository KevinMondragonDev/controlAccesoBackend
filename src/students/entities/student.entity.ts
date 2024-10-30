import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { StudentImage } from './student-image.entity';

@Entity({ name: 'students' })
export class Student {

    @PrimaryColumn('text', {
        unique: true,
    })
    Matricula: string;

    @Column()
    NombreCompleto: string;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    Inclusion: string;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    Generacion: string;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    Genero: string;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    Carrera: string;

    @Column('int', {  // Change 'number' to 'int'
        nullable: true,  // Allow null values
    })
    Cuatrimestre: number;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    Grupo: string;

    @Column('text', {
        unique: true,
        nullable: true,  // Allow null values
    })
    FolioDeCredencial: string;

    @Column('text', {
        unique: true,
        nullable: true,  // Allow null values
    })
    FolioDeCredencial2: string;

    @Column('text', {
        nullable: true,  // Allow null values
    })
    EstatusDeImpresion: string;

    @Column('boolean', {
        nullable: true,  // Allow null values
    })
    Estatus: boolean;

    @OneToMany(
        () => StudentImage,
        (studentImage) => studentImage.student,
        { cascade: true, eager: false }  // Consider changing to eager: false
    )
    images?: StudentImage[];

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
