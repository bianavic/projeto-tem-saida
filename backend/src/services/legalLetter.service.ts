import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { LegalLetterRepository } from '../repositories/legalLetter.repository';
import { CreateLegalLetterDTO } from '../dto/legalLetter.dto';

@Injectable()
export class LegalLetterService extends BaseService {
  constructor(private readonly legalLetterRepository: LegalLetterRepository) {
    super();
  }

  create(createLegalLetterDTO: CreateLegalLetterDTO): Promise<any> {
    return this.legalLetterRepository.create(createLegalLetterDTO);
  }

  getLegalLetters() {
    return this.legalLetterRepository.getLegalLetters();
  }
}