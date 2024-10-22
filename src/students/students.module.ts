import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student, StudentImage } from './entities';

@Module({
  controllers: [StudentsController],
  imports:[
    TypeOrmModule.forFeature([Student , StudentImage])
  ],
  providers: [StudentsService],
})
export class StudentsModule {}
