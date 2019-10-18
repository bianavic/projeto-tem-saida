import { Module } from '@nestjs/common';
import { LegalLetterController } from '../controllers/legalLetter.controller';
import { LegalLetterService } from '../services/legalLetter.service';
import { LegalLetterRepository } from '../repositories/legalLetter.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { LegalLetterSchema } from '../schemas/legalLetter.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: 'legal_letter', schema: LegalLetterSchema },
      ]),
    ],
  
    controllers: [LegalLetterController],
    providers: [LegalLetterService, LegalLetterRepository],
    exports: [LegalLetterService, LegalLetterRepository],
  })
  export class LegalLetterModule {}