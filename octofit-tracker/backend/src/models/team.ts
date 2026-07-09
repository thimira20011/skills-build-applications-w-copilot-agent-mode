import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    coach: { type: String, required: true, trim: true },
    points: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

const Team = model('Team', teamSchema);

export default Team;