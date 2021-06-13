import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DrinkController from './app/controllers/DrinkController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/drinks', DrinkController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

export default routes;
