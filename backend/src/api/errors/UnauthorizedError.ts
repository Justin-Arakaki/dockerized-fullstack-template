export default class UnauthorizedError extends Error {
  constructor(message: string = 'Error 401 Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}
