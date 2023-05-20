/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler as ErrReq } from 'express';
import BadRequestError from '../errors/BadRequestError';
import ForbiddenError from '../errors/ForbiddenError';
import UnauthorizedError from '../errors/ForbiddenError';
import NotFoundError from '../errors/NotFoundError';

export const errorHandlerMiddleware: ErrReq = (err, req, res, next) => {
  switch (true) {
    case err instanceof BadRequestError:
      res.status(400).json({ error: err.message });
      break;
    case err instanceof UnauthorizedError:
      res.status(401).json({ error: err.message });
      break;
    case err instanceof ForbiddenError:
      res.status(403).json({ error: err.message });
      break;
    case err instanceof NotFoundError:
      res.status(404).json({ error: `The ${err.resource} was not found` });
      break;
    default:
      res.status(500).json({ error: 'Internal Server Error' });
      break;
  }
};
