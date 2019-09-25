import { Router } from 'express';

import { createThumbnail } from './image.controller';

const routes = Router();

routes.get('/thumbnail', createThumbnail);

export default routes;
