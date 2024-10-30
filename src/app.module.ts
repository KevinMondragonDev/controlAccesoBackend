import { Module } from '@nestjs/common';

import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { EmployeesModule } from './employees/employees.module';
import { TorniqueteModule } from './torniquete/torniquete.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      //host: process.env.DB_HOST || 'database', // Default to 'database'
      port: +process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'controlacceso',
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      autoLoadEntities: true,
      synchronize: true,
      // Opciones de reintentos
  extra: {
    connectionTimeoutMillis: 2000, // Tiempo de espera de conexión en milisegundos
  },
  // Puedes ajustar retryAttempts según lo necesites
  retryAttempts: 5,
  retryDelay: 3000, // Tiempo entre reintentos en milisegundos
    }),
    CommonModule,
    EmployeesModule,
    TorniqueteModule,
    StudentsModule
  ]
})
export class AppModule {}

