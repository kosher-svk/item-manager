import { CustomError } from '../errors/custom-error.mjs';

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'Unknown error' });
};

export default errorHandlerMiddleware;
