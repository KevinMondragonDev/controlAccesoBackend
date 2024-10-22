import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";


@Entity({ name: 'student_images'})
export class StudentImage {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url:string

    @ManyToOne(
        ()=> Student,
        (student) => student.images,
        { onDelete: 'CASCADE'}

    )
    student: Student

}