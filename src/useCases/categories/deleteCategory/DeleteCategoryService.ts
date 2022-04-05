import { dataSource } from "../../../database";
import { Category } from "../../../entities/Category";
import { AppError } from "../../../errors/AppError";

export class DeleteCategoryService {
  async execute(id: string) {
    const categoriesRepository = dataSource.getRepository(Category);

    const category = await categoriesRepository.findOne({ where: { id } });
    if (!category) throw new AppError("Category not found.");

    await categoriesRepository.delete({ id });

    return;
  }
}
