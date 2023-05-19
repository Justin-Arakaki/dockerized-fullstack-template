class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
    this.resource = resource;
  }
}

const handleBadRequestError = (err, res) => {
  // Handle BadRequestError
  res.status(400).json({ error: err.message });
};

const handleNotFoundError = (err, res) => {
  // Handle NotFoundError
  res.status(404).json({ error: `The ${err.resource} was not found` });
};

function handleError(err, req, res, next) {
  if (err instanceof BadRequestError) {
    handleBadRequestError(err, res);
  } else if (err instanceof NotFoundError) {
    handleNotFoundError(err, res);
  } else {
    // Handle other error types
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { BadRequestError, NotFoundError, handleError };
