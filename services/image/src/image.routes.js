/**
 * @fileOverview Contains the Image service routes
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:express
 * @requires image.controller
*/

import { Router } from 'express';

import { createThumbnail } from './image.controller';

const routes = Router();

routes.get('/thumbnail', createThumbnail);

export default routes;
