import { Logger } from '@nestjs/common';

export class BaseController {
  logger: Logger = new Logger();
}
