import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './modules/app.module';
import { ConfigService } from './services/config.service';

import { ENV_FILE } from './contants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('NestFactory');

  const configService = new ConfigService(ENV_FILE);

  const APP_PORT = configService.get('APP_PORT') || 3000;

  await app.listen(APP_PORT, () => {
    logger.log(`Server is running on: http://localhost:${APP_PORT}`);
  });
}
bootstrap();
