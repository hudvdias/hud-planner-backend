import { dataSource } from "../../../database";
import { Category } from "../../../entities/Category";
import { Goal } from "../../../entities/Goal";
import { AppError } from "../../../errors/AppError";

export class CreateGoalService {
  async execute(title: string, categoryId: string) {
    const categoriesRepository = dataSource.getRepository(Category);
    const goalsRepository = dataSource.getRepository(Goal);

    const category = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) throw new AppError("Category not found.");

    const goal = goalsRepository.create({
      title,
      categoryId,
    });
    const createdGoal = await goalsRepository.save(goal);

    return createdGoal;
  }
}
