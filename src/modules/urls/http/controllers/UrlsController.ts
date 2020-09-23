import GetUrlSerivce from '@modules/urls/services/GetUrlService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UrlsController {
  public async show(request: Request, response: Response) {
    const { shortened } = request.params;

    const getUrl = container.resolve(GetUrlSerivce);
    const url = await getUrl.execute({ shortened });

    response.redirect(301, url.original);
  }
}

export default UrlsController;
