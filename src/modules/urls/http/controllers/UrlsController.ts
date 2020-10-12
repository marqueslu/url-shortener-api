import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetUrlSerivce from '@modules/urls/services/GetUrlService';
import CreateUrlService from '@modules/urls/services/CreateUrlService';

class UrlsController {
  public async show(request: Request, response: Response) {
    const { shortened } = request.params;

    const getUrl = container.resolve(GetUrlSerivce);
    const { original } = await getUrl.execute({ shortened });

    response.redirect(301, original);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { original } = request.body;

    const createUrl = container.resolve(CreateUrlService);

    const url = await createUrl.execute({
      original,
    });

    return response.json(url);
  }
}

export default UrlsController;
