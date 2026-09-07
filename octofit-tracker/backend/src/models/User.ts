import { Schema, model } from 'mongoose';

export interface UserDocument {
  username: string;
  displayName: string;
  email: string;
  fitnessGoal: string;
  preferredWorkout: string;
  joinedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    fitnessGoal: { type: String, required: true },
    preferredWorkout: { type: String, required: true },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User = model<UserDocument>('User', userSchema);
