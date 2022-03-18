
// Adicionar coluna avatar na tabela de users
// Refatorar usuário com coluna avatar
// Configuracao upload multer
// Criar a regra de negocio do Upload
// Criar controller

import { IUsersRepository } from "../repositories/IUsersRepository";


interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    user.avatar = avatar_file;
    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase }