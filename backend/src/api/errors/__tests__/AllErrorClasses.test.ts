import BadRequestError from '../BadRequestError';
import ForbiddenError from '../ForbiddenError';
import NotFoundError from '../NotFoundError';
import UnauthorizedError from '../UnauthorizedError';

const errorClasses = [
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
];

describe('Error classes', () => {
  test.each(errorClasses)('should have the correct name', (ErrorClass) => {
    const error = new ErrorClass('Some error message');
    expect(error.name).toBe(ErrorClass.name);
  });

  test.each(errorClasses)('should inherit from Error', (ErrorClass) => {
    const error = new ErrorClass('Some error message');
    expect(error instanceof Error).toBe(true);
  });
});
