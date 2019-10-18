import { Schema, Document } from 'mongoose';

export interface IUserProfile extends Document {
  name: string;
  description: string;
  role: number;
}

export const UserProfileSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  role: {
    type: Number,
  },
});
