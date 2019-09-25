/**
 * @fileOverview Contains the JSON service middleware
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:fast-json-patch
*/

import { validate } from 'fast-json-patch';

/**
 * @description Validates the operation object alongside the document
 *
 * @param {object} request - The HTTP request object
 * @param {object} response - The HTTP response object
 * @param {object} next - The next middleware to be invoked
 *
 * @returns {object}
*/
export function validatePatch({ body }, response, next) {
  const { document, operation } = body;
  const operationErrors = validate([operation], document);

  if (!operationErrors) return next();

  return response.status(400).json({
    status: 'error',
    errors: operationErrors,
  });
}
