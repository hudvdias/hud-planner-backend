import { dataSource } from "../../../database";
import { Category } from "../../../entities/Category";
import { User } from "../../../entities/User";
import { AppError } from "../../../errors/AppError";

export class ListCategoriesByUserIdService {
  async execute(userId: string) {
    const usersRepository = dataSource.getRepository(User);
    const categoriesRepository = dataSource.getRepository(Category);

    const user = await usersRepository.findOneBy({ id: userId });
    if (!user) throw new AppError("User not found.");

    const categories = await categoriesRepository.find({
      where: { userId },
      relations: {
        goals: true,
      },
    });

    return categories;
  }
}
