import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
// Todas as rotas abaixo vão precisar estar autenticadas
// (inserir token de autenticação no auth bearer com o token gerado na sessão)

routes.post('/users', StudentController.store);
routes.put('/users', StudentController.update);

export default routes;
