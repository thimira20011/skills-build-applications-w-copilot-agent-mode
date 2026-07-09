import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
    teamName: { type: String, required: true, trim: true },
    points: { type: Number, required: true },
    weeklyChange: { type: Number, required: true }
  },
  { timestamps: true }
);

const Leaderboard = model('Leaderboard', leaderboardSchema);

export default Leaderboard;