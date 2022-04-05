import { dataSource } from "../../../database";
import { Category } from "../../../entities/Category";
import { User } from "../../../entities/User";
import { AppError } from "../../../errors/AppError";

export class CreateCategoryService {
  async execute(title: string, userId: string) {
    const categoryRepository = dataSource.getRepository(Category);
    const usersRepository = dataSource.getRepository(User);

    const user = usersRepository.findOneBy({ id: userId });

    if (!user) throw new AppError("User not found.");

    const category = categoryRepository.create({
      title,
      userId,
    });
    const createdCategory = await categoryRepository.save(category);

    return createdCategory;
  }
}
