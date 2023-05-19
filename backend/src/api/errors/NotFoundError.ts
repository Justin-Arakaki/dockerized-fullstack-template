export default class NotFoundError extends Error {
  public resource: string;

  constructor(resource: string) {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
    this.resource = resource;
  }
}
