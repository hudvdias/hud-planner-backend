import { dataSource } from "../../../database";
import { Goal } from "../../../entities/Goal";
import { Task } from "../../../entities/Task";
import { AppError } from "../../../errors/AppError";

export class ListTasksByGoalIdService {
  async execute(goalId: string) {
    const tasksRepository = dataSource.getRepository(Task);
    const goalsRepository = dataSource.getRepository(Goal);

    const goal = await goalsRepository.findOne({ where: { id: goalId } });
    if (!goal) throw new AppError("Goal not found.");

    const tasks = await tasksRepository.find({ where: { goalId } });

    return tasks;
  }
}
