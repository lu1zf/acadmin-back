import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'servidor iniciado com sucesso!' });
});

export default routes;
