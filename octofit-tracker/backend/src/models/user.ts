import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    role: { type: String, required: true, default: 'member' },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null }
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;