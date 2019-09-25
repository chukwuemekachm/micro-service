import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './image.routes';
import logger from './logger';

const imageService = express();
const {
  IMAGE_SERVICE_PORT = 3003,
} = process.env;

imageService.use(helmet());
imageService.use(bodyParser.urlencoded({ extended: true }));
imageService.use(bodyParser.json());

imageService.use('/api/v1/image', routes);

imageService.all('*', (request, response) => response.status(404).json({
  status: 'fail',
  message: 'Route-unavailable',
}));

imageService.use((error, request, response) => response.status(500).json({
  status: 'error',
  message: 'Internal Server error',
}));

imageService.listen(IMAGE_SERVICE_PORT, () => logger.log({
  level: 'info',
  message: `'Image service listening on port ' ${IMAGE_SERVICE_PORT}`,
}));

export default imageService;
