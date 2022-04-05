import { dataSource } from "../../../database";
import { Task } from "../../../entities/Task";
import { AppError } from "../../../errors/AppError";

export class DeleteTaskService {
  async execute(id: string) {
    const tasksRepository = dataSource.getRepository(Task);

    const task = await tasksRepository.findOne({ where: { id } });
    if (!task) throw new AppError("Task not found.");

    await tasksRepository.delete({ id });

    return;
  }
}
