export default class UnauthorizedError extends Error {
  constructor(message: string = 'Error 403 Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
  }
}
