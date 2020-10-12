import * as crypto from 'crypto';
import IHashProvider from '../interfaces/IHashProvider';

class HashProvider implements IHashProvider {
  public async generateHash(size: number): Promise<string> {
    return crypto.randomBytes(size).toString('hex');
  }
}

export default HashProvider;
