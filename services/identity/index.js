import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import routes from './identity.routes';
import logger from './logger';

const identityService = express();
const {
  IDENTITY_SERVICE_PORT = 3001,
} = process.env;

identityService.use(helmet());
identityService.use(bodyParser.urlencoded({ extended: true }));
identityService.use(bodyParser.json());

identityService.use('/api/v1/auth', routes);

identityService.all('*', (request, response) => response.status(404).json({
  status: 'fail',
  message: 'Route-unavailable',
}));

identityService.use((error, request, response) => {
  logger.log({
    level: 'error',
    message: error.message,
  });
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
});

identityService.listen(IDENTITY_SERVICE_PORT, () => logger.log({
  level: 'info',
  message: `'Identity service listening on port ' ${IDENTITY_SERVICE_PORT}`,
}));

export default identityService;
