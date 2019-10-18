import { Injectable } from '@nestjs/common';

import { BaseRepository } from './base.repository';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { CreateLegalLetterDTO } from 'src/dto/legalLetter.dto';
import { ILegalLetter } from 'src/schemas/legalLetter.schema';

@Injectable()
export class LegalLetterRepository extends BaseRepository {
  constructor(
    @InjectModel('legalLetter') private readonly legalLetterModel: Model<ILegalLetter>,
  ) {
    super();
  }

  async create(createLegalLetterDTO: CreateLegalLetterDTO): Promise<any> {
    const createdLegalLetter = new this.legalLetterModel(createLegalLetterDTO);
    return await createdLegalLetter.save();
  }

  async getLegalLetters(): Promise<any> {
    return await this.legalLetterModel.find();
  }

}
