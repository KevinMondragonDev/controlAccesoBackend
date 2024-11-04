import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'student_images' })
export class StudentImage {

    @ApiProperty({
        description: 'Identificador único de la imagen del estudiante',
        type: Number,
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'URL de la imagen del estudiante',
        type: String,
    })
    @Column('text')
    url: string;

    @ApiProperty({
        description: 'Estudiante al que pertenece la imagen',
        type: () => Student, // Referencia al objeto Student
    })
    @ManyToOne(
        () => Student,
        (student) => student.images,
        { onDelete: 'CASCADE' }
    )
    student: Student;
}
