import { Logger } from '@nestjs/common';

export class BaseRepository {
  logger: Logger = new Logger();
}
