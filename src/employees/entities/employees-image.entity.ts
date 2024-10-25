import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";


@Entity({ name: 'employee_images'})
export class EmployeeImage {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url:string

    @ManyToOne(
        ()=> Employee,
        (employee) => employee.images,
        { onDelete: 'CASCADE'}

    )
    employee: Employee

}