import { dataSource } from "../../../database";
import { Goal } from "../../../entities/Goal";
import { Task } from "../../../entities/Task";
import { AppError } from "../../../errors/AppError";

export class CreateTaskService {
  async execute(title: string, date: number, routine: string, goalId: string) {
    const goalsRepository = dataSource.getRepository(Goal);
    const tasksRepository = dataSource.getRepository(Task);

    const goal = await goalsRepository.findOneBy({ id: goalId });
    if (!goal) throw new AppError("Goal not found.");

    const taskRoutines = ["none", "day", "week", "month", "year"];
    if (!taskRoutines.includes(routine)) throw new AppError("Invalid routine.");

    const task = tasksRepository.create({
      title,
      goalId,
      date,
      routine,
    });
    const createdTask = await tasksRepository.save(task);

    return createdTask;
  }
}
