import { container } from 'tsyringe';

import IHashProvider from './interfaces/IHashProvider';
import HashProvider from './implementations/HashProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
