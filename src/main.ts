import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('main');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true
    })
  );
  const config = new DocumentBuilder()
    .setTitle('Access Control of UPSRJ RESTFul API')
    .setDescription('The Api work with the employees and students of the university, this with the credencial NFC')
    .setVersion('.8')
    .addTag('university')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('controlAcceso', app, documentFactory);
  
  app.setGlobalPrefix("/controlAcceso")
  await app.listen(process.env.PORT || 3000);
  logger.log(`App running on ${process.env.PORT || 3000}`)

}
bootstrap();
