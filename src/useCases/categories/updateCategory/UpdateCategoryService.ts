import { dataSource } from "../../../database";
import { ICategoryUpdateDTO } from "../../../dtos/ICategoryUpdateDTO";
import { Category } from "../../../entities/Category";
import { AppError } from "../../../errors/AppError";

export class UpdateCategoryService {
  async execute({ id, ...data }: ICategoryUpdateDTO) {
    const categoriesRepository = dataSource.getRepository(Category);

    const category = await categoriesRepository.findOne({ where: { id } });
    if (!category) throw new AppError("Category not found.");

    const updatedCategoryData = await categoriesRepository.save({
      id,
      ...data,
    });

    return updatedCategoryData;
  }
}
