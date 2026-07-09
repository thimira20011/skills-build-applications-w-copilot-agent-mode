import { Router } from 'express';
import { apiBaseUrl } from '../config/runtime.js';
export function createResourceRouter(resourceName, model) {
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
        }
        catch (error) {
            next(error);
        }
    });
    return router;
}
