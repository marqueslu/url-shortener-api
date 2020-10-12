import { inject, injectable } from 'tsyringe';

import Url from '../infra/typeorm/entities/Url';
import UrlsRepository from '../infra/typeorm/repositories/UrlsRepository';

interface IRequest {
  shortened: string;
}

@injectable()
class GetUrlSerivce {
  constructor(
    @inject('UrlsRepository')
    private urlsRepository: UrlsRepository,
  ) {}

  public async execute({ shortened }: IRequest): Promise<Url> {
    const url = await this.urlsRepository.findByShortened(shortened);

    if (!url) {
      // To Do: Add exception class
      // throw new Error();
    }

    return url;
  }
}

export default GetUrlSerivce;
