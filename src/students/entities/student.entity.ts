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
    Nombre:string;

    @Column()
    Inclusion:boolean;

    @Column()
    Generacion:string;

    @Column()
    Grupo:string;

    @Column()
    Genero:string;

    @Column()
    Cuatrimestre:string;

    @Column()
    Activo:boolean;

    @Column()
    Carrera:string;

    @OneToMany(
        () => StudentImage,
        (studentImage) => studentImage.student,
        {cascade:true, eager:true}
    )
    images?:StudentImage[];


}


