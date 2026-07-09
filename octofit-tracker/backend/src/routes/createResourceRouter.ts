import { Router } from 'express';

import { apiBaseUrl } from '../config/runtime.js';

type ResourceName = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';

type ModelQuery = {
  find: () => Promise<unknown[]>;
  countDocuments: () => Promise<number>;
};

export function createResourceRouter(resourceName: ResourceName, model: ModelQuery) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const [items, count] = await Promise.all([model.find(), model.countDocuments()]);

      response.json({
        apiBaseUrl,
        count,
        data: items,
        resource: resourceName,
        status: 'ok'
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}