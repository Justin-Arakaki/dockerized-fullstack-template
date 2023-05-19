type UnauthorizedErrorType =
  | 'Authentication Failure'
  | 'Authorization Failure'
  | 'Invalid Access Token'
  | 'Missing Authentication'
  | 'Role-Based Access Control';

export default class UnauthorizedError extends Error {
  public errorType: UnauthorizedErrorType;

  constructor(
    errorType: UnauthorizedErrorType,
    message: string = 'Unauthorized'
  ) {
    super(message);
    this.name = 'UnauthorizedError';
    this.errorType = errorType;
  }
}
