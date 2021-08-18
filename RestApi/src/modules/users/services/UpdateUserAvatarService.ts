import path from 'path';
import fs from 'fs';

import uploadConfig from '@config/upload';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface Request {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpadateUserAvatarService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
    ) {}

  public async execute({ user_id, avatarFilename }: Request) : Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if(!user) {
      throw new AppError("Only authenticated users can change avatar", 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFilename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpadateUserAvatarService