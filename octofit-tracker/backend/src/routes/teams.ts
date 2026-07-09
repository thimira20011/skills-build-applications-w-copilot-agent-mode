import Team from '../models/team.js';
import { createResourceRouter } from './createResourceRouter.js';

export default createResourceRouter('teams', Team);