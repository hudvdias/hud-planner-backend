import { dataSource } from "../../../database";
import { IGoalUpdateDTO } from "../../../dtos/IGoalUpdateDTO";
import { Goal } from "../../../entities/Goal";
import { AppError } from "../../../errors/AppError";

export class UpdateGoalService {
  async execute({ id, ...data }: IGoalUpdateDTO) {
    const goalsRepository = dataSource.getRepository(Goal);

    const goal = await goalsRepository.findOne({ where: { id } });
    if (!goal) throw new AppError("Goal not found.");

    const updatedGoalData = await goalsRepository.save({
      id,
      ...data,
    });

    return updatedGoalData;
  }
}
