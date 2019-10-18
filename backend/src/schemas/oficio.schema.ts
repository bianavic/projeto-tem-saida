import { Schema, Document } from 'mongoose';

export interface IOficio extends Document {
    oficio_id: string;
    created_at: Date;
    justificativa: String;
  }

export const OficioSchema = new Schema({
    oficio_id: {
        type: String,
      },
      created_at: {
        type: Date,
        default: Date.now(),
      },
      justificativa : {
        type: String,
      },
});