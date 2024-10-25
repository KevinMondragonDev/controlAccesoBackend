import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { EmployeesModule } from './employees/employees.module';
import { TorniqueteModule } from './torniquete/torniquete.module';




const DB_PASSWORD="root";
const DB_NAME="controlacceso";
const DB_HOST="localhost";
const DB_PORT=5432;
const DB_USERNAME="postgres";

@Module({
  imports: [
    StudentsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      autoLoadEntities: true,
      //Este ultimo es para los cambios en las entidades se reflejen en las tablas
      //No es comum que se use produccion
      synchronize:true,
    }),
    CommonModule,
    EmployeesModule,
    TorniqueteModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
