import IStorageprovider from '../models/IStorageProvider';

export default class FakeDiskStorageProvider implements IStorageprovider {
  private storage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const fileIndex = this.storage.findIndex(item => item === file);

    this.storage.splice(fileIndex, 1);
  }
}
