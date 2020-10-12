import { container } from 'tsyringe';
import '@modules/urls/providers';

import UrlsRepository from '../../modules/urls/infra/typeorm/repositories/UrlsRepository';
import IUrlsRepository from '../../modules/urls/repositories/IUrlsRepository';

container.registerSingleton<IUrlsRepository>('UrlsRepository', UrlsRepository);
