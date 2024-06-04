import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const configService: ConfigService = new ConfigService();

console.info(configService.get('http.port'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.get('http.port'));
}

bootstrap();
