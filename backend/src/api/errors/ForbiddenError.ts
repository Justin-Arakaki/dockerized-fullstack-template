type ForbiddenErrorType =
  | 'Access Denied'
  | 'Unauthorized User'
  | 'Insufficient Privileges'
  | 'RBAC Violation'
  | 'Resource Ownership Violation'
  | 'Expired or Revoked Access Token';

export default class UnauthorizedError extends Error {
  public errorType: ForbiddenErrorType;

  constructor(errorType: ForbiddenErrorType, message: string = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
    this.errorType = errorType;
  }
}
