import User from '../models/user.js';
import { createResourceRouter } from './createResourceRouter.js';

export default createResourceRouter('users', User);