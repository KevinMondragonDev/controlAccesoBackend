import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//TODO Aqui vamos a mandar el Folio de la credencial de alumnos y empleados
