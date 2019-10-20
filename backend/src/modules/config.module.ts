import { Module } from '@nestjs/common';
import { ConfigService } from '../services/config.service';

import { ENV_FILE } from '../contants';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(ENV_FILE),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
