import { dataSource } from "../../../database";
import { Category } from "../../../entities/Category";
import { Goal } from "../../../entities/Goal";
import { AppError } from "../../../errors/AppError";

export class ListGoalsByCategoryIdService {
  async execute(categoryId: string) {
    const categoriesRepository = dataSource.getRepository(Category);
    const goalsRepository = dataSource.getRepository(Goal);

    const category = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) throw new AppError("Category not found.");

    const goals = await goalsRepository.find({
      where: { categoryId },
      relations: {
        tasks: true,
      },
    });

    return goals;
  }
}
