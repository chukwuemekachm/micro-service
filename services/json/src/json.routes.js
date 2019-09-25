/**
 * @fileOverview Contains the JSON service routes
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:express
 * @requires json.controller
 * @requires json.middlewares
*/

import { Router } from 'express';

import { patchDoc } from './json.controller';
import { validatePatch } from './json.middlewares';

const routes = Router();

routes.patch('/doc', validatePatch, patchDoc);

export default routes;
