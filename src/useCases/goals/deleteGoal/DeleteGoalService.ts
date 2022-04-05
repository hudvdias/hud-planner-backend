import { dataSource } from "../../../database";
import { Goal } from "../../../entities/Goal";
import { AppError } from "../../../errors/AppError";

export class DeleteGoalService {
  async execute(id: string) {
    const goalsRepository = dataSource.getRepository(Goal);

    const goal = await goalsRepository.findOne({ where: { id } });
    if (!goal) throw new AppError("Goal not found.");

    await goalsRepository.delete({ id });

    return;
  }
}
