import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'app',
      protoPath: join(__dirname, 'app.proto'),
    },
  });
  await app.listen();
}
bootstrap();
