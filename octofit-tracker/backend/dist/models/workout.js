import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    intensity: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true },
    recommendedFor: { type: [String], required: true, default: [] }
}, { timestamps: true });
const Workout = model('Workout', workoutSchema);
export default Workout;
