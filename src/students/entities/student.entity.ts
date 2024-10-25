import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StudentImage } from './student-image.entity';
 
@Entity({name: 'students'})
export class Student{

    @PrimaryGeneratedColumn('uuid')
    id_alumno: string;

    @Column('text', {
        unique: true,
    })
    Matricula:string;

    @Column()
    NombreCompleto:string;

    @Column()
    Inclusion:boolean;

    @Column()
    Generacion:string;

    @Column()
    Genero:string;

    @Column()
    Carrera:string;

    @Column()
    Cuatrimestre:number;

    @Column()
    Grupo:string;

    @Column('text', {
        unique: true,
        nullable: true,  // Permitir valores nulos
    })
    FolioDeCredencial: string;
    
    @Column('text', {
        unique: true,
        nullable: true,  // Permitir valores nulos
    })
    FolioDeCredencial2: string;

    @Column()
    EstatusDeImpresion:string;

    @Column()
    Estatus:boolean;

    @OneToMany(
        () => StudentImage,
        (studentImage) => studentImage.student,
        {cascade:true, eager:true}
    )
    images?:StudentImage[];


    @BeforeInsert()
    checkSlugUpdate(){
        this.NombreCompleto = this.NombreCompleto
            .toUpperCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')

        this.Generacion = this.Generacion
            .toUpperCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
        
        this.Genero = this.Genero
            .toUpperCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
        
        this.Carrera = this.Carrera
            .toUpperCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
        
        this.EstatusDeImpresion = this.EstatusDeImpresion
            .toUpperCase()
            .replaceAll(' ','_')
            .replaceAll("'",'')
    }
}


