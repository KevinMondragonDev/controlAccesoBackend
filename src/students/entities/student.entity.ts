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
    Comentario:string;

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


}


