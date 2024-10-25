import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student, StudentImage } from './entities';
import { DataSource, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    
    @InjectRepository(StudentImage)
    private readonly StudentImageRepository: Repository<StudentImage>,
    
    private readonly dataSource:DataSource
  ){}

  async create(createStudentDto: CreateStudentDto) {
    try {
      const {images = [] , ...studentDetails} = createStudentDto;
      const student = this.studentRepository.create({
        ...studentDetails,
        images: images.map(image => this.StudentImageRepository.create({url:image}))
      });
      
      await this.studentRepository.save(student);

      return{...student , images}
    } catch (error) {
      throw new BadRequestException(error.detail)
    }
    
  }

   // todo: paginar
   async findAll( paginationDTO: PaginationDto) {
         
    const {limit= 10 , offset = 0 } = paginationDTO;

    const products = await this.studentRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true,
      }
    });
    
    return products.map( product => ({
      ...product,
      imagenes: product.images.map( img => img.url)
    }))
  
}

  async findOne(term: string) {
    let student: Student;

    if (term) {
        // Buscando por FolioDeCredencial
        student = await this.studentRepository.findOneBy({ FolioDeCredencial: term });
        if(student === null){
          student = await this.studentRepository.findOneBy({ Matricula: term });
        }
       
    } 
    
    if (!student) {
        throw new NotFoundException(`Student with term "${term}" not found`);
    }

    return student;
}

async findOnePlain(term: string){
  const {images = [], ...rest} = await this.findOne(term);

  return {
    ...rest,
    images: images.map(image => image.url)
  }
}

  update(id: number, updateStudentDto: UpdateStudentDto) {

    //TODO Realizar el actualizar los alumnos
    return `This action updates a #${id} student`;
  }

  async remove(term: string) {
    const {affected} = await this.studentRepository.delete({Matricula:term})

    if(affected === 0){
      throw new NotFoundException(`The Matricula ${term} is not found`)
    }

    return ` ${term} is delete of the database`
  }
}
