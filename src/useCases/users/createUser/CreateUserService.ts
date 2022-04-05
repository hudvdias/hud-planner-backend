import { dataSource } from "../../../database";
import { User } from "../../../entities/User";
import { AppError } from "../../../errors/AppError";

export class CreateUserService {
  async execute(email: string, name: string, image: string) {
    const usersRepository = dataSource.getRepository(User);

    const userAlreadyExists = await usersRepository.findOne({
      where: { email },
    });
    if (userAlreadyExists) throw new AppError("User already exists.");

    const user = usersRepository.create({
      email,
      name,
      image,
    });
    const createdUser = await usersRepository.save(user);

    return createdUser;
  }
}
