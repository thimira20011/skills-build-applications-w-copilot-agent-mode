import Workout from '../models/workout.js';
import { createResourceRouter } from './createResourceRouter.js';
export default createResourceRouter('workouts', Workout);
