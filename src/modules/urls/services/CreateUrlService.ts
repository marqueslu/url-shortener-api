import { inject, injectable } from 'tsyringe';
import Url from '../infra/typeorm/entities/Url';
import IHashProvider from '../providers/interfaces/IHashProvider';
import IUrlsRepository from '../repositories/IUrlsRepository';

interface IRequest {
  original: string;
}

@injectable()
class CreateUrlService {
  constructor(
    @inject('UrlsRepository')
    private urlsRepository: IUrlsRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({ original }: IRequest): Promise<Url> {
    const existentUrl = await this.urlsRepository.findByOriginalUrl(original);

    if (existentUrl) {
      // throw an error
    }

    const hash = await this.hashProvider.generateHash(10);

    const url = await this.urlsRepository.create({
      original,
      shortened: hash,
    });

    return url;
  }
}

export default CreateUrlService;
