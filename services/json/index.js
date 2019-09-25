/**
 * @fileOverview Contains the JSON Service
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:express
 * @requires NPM:body-parser
 * @requires NPM:helmet
 * @requires NPM:@sentry/node
 * @requires json.routes
 * @requires logger
*/

import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import * as Sentry from '@sentry/node';

import routes from './json.routes';
import logger from './logger';

const {
  JSON_SERVICE_PORT = 3002,
  SENTRY_DSN = 'SENTRY_DSN',
} = process.env;

Sentry.init({
  dsn: SENTRY_DSN,
  maxBreadcrumbs: 50,
  serverName: 'JSON-MICRO-SERVICE',
});
const jsonService = express();

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
