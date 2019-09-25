/**
 * @fileOverview Contains the API Gateway
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:path
 * @requires NPM:@sentry/node
 * @requires NPM:express-gateway
*/

import path from 'path';
import gateway from 'express-gateway';
import * as Sentry from '@sentry/node';

const {
  SENTRY_DSN = 'SENTRY_DSN',
} = process.env;

Sentry.init({
  dsn: SENTRY_DSN,
  maxBreadcrumbs: 50,
  serverName: 'IDENTITY-MICRO-SERVICE',
});

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
