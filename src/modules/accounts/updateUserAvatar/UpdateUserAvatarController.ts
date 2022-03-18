import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";


class UpdateUserAvatarController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = null;
    const UpdateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
    await UpdateUserAvatarUseCase.execute({ user_id: id, avatar_file });
    return response.status(200).send();
  }
}

export { UpdateUserAvatarController }