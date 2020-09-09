import Url from '../infra/typeorm/entities/Url';
import ICreateUrlDTO from '../dtos/ICreateUrlDTO';

interface IUrlsRepository {
  findByOriginalUrl(original: string): Promise<Url | undefined>;
  findByShortened(shortened: string): Promise<Url | undefined>;
  create(data: ICreateUrlDTO): Promise<Url>;
  delete(id: string): Promise<void>;
}

export default IUrlsRepository;
