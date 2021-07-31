const ErrorHandler = require('../utils/errorHandler');

export const errorMiddleWare = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };

  error.message = err.message;

  if (err.name === 'CastError') {
    const message = 'Resource not found for given' + err.path;
    error = new ErrorHandler(message, 400);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    error,
    message: error.message,
    stack: error.stack,
  });
};
