import { Router } from 'express';

import { login } from './identity.controller';

const routes = Router();

routes.post('/login', login);

export default routes;
