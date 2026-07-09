import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
    activityType: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true }
  },
  { timestamps: true }
);

const Activity = model('Activity', activitySchema);

export default Activity;