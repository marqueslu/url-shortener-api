interface IHashProvider {
  generateHash(size: number): Promise<string>;
}

export default IHashProvider;
