import { Schema, Document } from 'mongoose';

export interface ILegalLetter extends Document {
    created_at: Date;
    justificativa: String;
  }

export const LegalLetterSchema = new Schema({
      created_at: {
        type: Date,
        default: Date.now(),
      },
      justificativa : {
        type: String,
      },
});