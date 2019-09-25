import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './json.routes';
import logger from './logger';

const jsonService = express();
const {
  JSON_SERVICE_PORT = 3002,
} = process.env;

jsonService.use(helmet());
jsonService.use(bodyParser.urlencoded({ extended: true }));
jsonService.use(bodyParser.json());

jsonService.use('/api/v1/json', routes);

jsonService.all('*', (request, response) => response.status(404).json({
  status: 'fail',
  message: 'Route-unavailable',
}));

jsonService.use((error, request, response) => response.status(500).json({
  status: 'error',
  message: 'Internal Server error',
}));

jsonService.listen(JSON_SERVICE_PORT, () => logger.log({
  level: 'info',
  message: `'Json service listening on port ' ${JSON_SERVICE_PORT}`,
}));

export default jsonService;
