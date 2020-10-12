import crypto from 'crypto';
import { inject, injectable } from 'tsyringe';

import Url from '../infra/typeorm/entities/Url';
import IUrlsRepository from '../repositories/IUrlsRepository';

interface IRequest {
  original: string;
}

@injectable()
class CreateUrlService {
  constructor(
    @inject('UrlsRepository')
    private urlsRepository: IUrlsRepository,
  ) {}

  public async execute({ original }: IRequest): Promise<Url> {
    const existentUrl = await this.urlsRepository.findByOriginalUrl(original);

    if (existentUrl) {
      // throw an error
    }

    const hash = crypto.randomBytes(10).toString('hex');

    const url = await this.urlsRepository.create({
      original,
      shortened: hash,
    });

    return url;
  }
}

export default CreateUrlService;
