import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true
    })
  );
  app.setGlobalPrefix("/controlAcceso")
  await app.listen(process.env.PORT);
  logger.log(`App running on ${process.env.PORT}`)

}
bootstrap();
