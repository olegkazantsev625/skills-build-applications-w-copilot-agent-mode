import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  username: string;
  teamName: string;
  totalPoints: number;
  totalMinutes: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    username: { type: String, required: true, unique: true, index: true },
    teamName: { type: String, required: true, index: true },
    totalPoints: { type: Number, required: true, min: 0 },
    totalMinutes: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);
