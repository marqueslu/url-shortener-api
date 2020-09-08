import { Request, Response } from 'express';

class UrlsController {
  public index(request: Request, response: Response): Response {
    return response.json({ message: 'Hello world' });
  }
}

export default UrlsController;
