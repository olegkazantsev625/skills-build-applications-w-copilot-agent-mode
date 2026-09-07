import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  equipment: string[];
  suggestedForGoal: string;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true, unique: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    equipment: { type: [String], required: true, default: [] },
    suggestedForGoal: { type: String, required: true },
  },
  { timestamps: true },
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);
