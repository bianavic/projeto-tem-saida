import { Controller, Post, Body, Get } from '@nestjs/common';
import { LegalLetterService } from '../services/legalLetter.service';
import { BaseController } from './base.controller';
import { CreateLegalLetterDTO } from '../dto/legalLetter.dto';

@Controller('legalLetters')
export class LegalLetterController extends BaseController {
  constructor(private readonly legalLetterService: LegalLetterService) {
    super();
  }

  @Post()
  create(@Body() CreateLegalLetterDTO: CreateLegalLetterDTO): Promise<any> {
    return this.legalLetterService.create(CreateLegalLetterDTO);
  }

  @Get('/legalLetters')
  getLegalLetters() {
    return this.legalLetterService.getLegalLetters();
  }
}
