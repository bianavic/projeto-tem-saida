import { Logger } from '@nestjs/common';

export class BaseService {
  logger: Logger = new Logger();
}
