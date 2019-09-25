/**
 * @fileOverview Contains the JSON service controller methods
 *
 * @author Chima Chukwuemeka
 *
 * @requires NPM:fast-json-patch
*/
import { applyOperation } from 'fast-json-patch';

/**
 * @description Apply the patch operation to the document
 *
 * @param {object} request - The HTTP request object
 * @param {object} response - The HTTP response object
 * @param {object} next - The next middleware to be invoked
 *
 * @returns {object}
*/
export function patchDoc({ body }, response, next) {
  try {
    const { document, operation } = body;

    const { newDocument } = applyOperation(document, operation);
    return response.status(200).json({
      status: 'success',
      data: {
        document: newDocument,
      },
    });
  } catch (error) {
    return next(error);
  }
}
