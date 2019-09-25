import { validate } from 'fast-json-patch';

export function validatePatch({ body }, response, next) {
  const { document, operation } = body;
  const operationErrors = validate([operation], document);

  if (!operationErrors) return next();

  return response.status(400).json({
    status: 'error',
    errors: operationErrors,
  });
}
