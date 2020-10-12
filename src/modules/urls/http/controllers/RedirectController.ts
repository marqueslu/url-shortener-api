import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetUrlSerivce from '@modules/urls/services/GetUrlService';

class RedirectController {
  public async show(request: Request, response: Response) {
    const { shortened } = request.params;

    const getUrl = container.resolve(GetUrlSerivce);
    const { original } = await getUrl.execute({ shortened });

    response.redirect(301, original);
  }
}

export default RedirectController;
