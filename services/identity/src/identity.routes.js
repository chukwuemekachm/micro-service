/**
 * @fileOverview Contains the Identity service routes
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:express
 * @requires identity.controller
*/

import { Router } from 'express';

import { login } from './identity.controller';

const routes = Router();

routes.post('/login', login);

export default routes;
