import { applyOperation } from 'fast-json-patch';

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
