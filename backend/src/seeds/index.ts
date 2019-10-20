import * as path from 'path';
import { Seeder } from 'mongo-seeding';

import { ConfigService } from 'src/services/config.service';
import { ENV_FILE } from 'src/contants';
import { Logger } from '@nestjs/common';

const configService = new ConfigService(ENV_FILE);

const config = {
  database: configService.get('DATABASE_MONGODB_URI'),
  dropDatabase: true,
};

const logger = new Logger('Seeding Mongo DB');

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, './data'),
  {
    extensions: ['ts'],
  },
);

logger.verbose('Iniciando importação...');

seeder
  .import(collections)
  .then(() => {
    logger.log('Êxito ao semear o bando de dados!');
  })
  .catch(err => {
    logger.error('Erro ao semear o bando de dados!', err);
  });
