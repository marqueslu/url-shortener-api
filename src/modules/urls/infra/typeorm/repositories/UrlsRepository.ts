import { Repository, getRepository } from 'typeorm';

import Url from '../entities/Url';
import IUrlsRepository from '../../../repositories/IUrlsRepository';
import ICreateUrlDTO from '../../../dtos/ICreateUrlDTO';

class UrlsRepository implements IUrlsRepository {
  private ormRepository: Repository<Url>;

  constructor() {
    this.ormRepository = getRepository(Url);
  }

  public async findByOriginalUrl(original: string): Promise<Url | undefined> {
    const url = await this.ormRepository.findOne({ where: { original } });

    return url;
  }

  public async findByShortened(shortened: string): Promise<Url | undefined> {
    const url = await this.ormRepository.findOne({ where: { shortened } });

    return url;
  }

  public async create(urlData: ICreateUrlDTO): Promise<Url> {
    const url = this.ormRepository.create(urlData);
    await this.ormRepository.save(url);

    return url;
  }

  public async delete(id: string): Promise<void> {
    const url = await this.ormRepository.findOne(id);

    if (url) await this.ormRepository.remove(url);
  }
}

export default UrlsRepository;
