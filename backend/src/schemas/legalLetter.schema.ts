import { Schema, Document } from 'mongoose';

export interface ILegalLetter extends Document {
    created_at: Date;
    justification: String;
  }

export const LegalLetterSchema = new Schema({
      created_at: {
        type: Date,
        default: Date.now(),
      },
      justification: {
        type: String,
      },
});