import { dataSource } from "../../../database";
import { IUpdateTaskDTO } from "../../../dtos/ITaskUpdateDTO";
import { Task } from "../../../entities/Task";
import { AppError } from "../../../errors/AppError";

export class UpdateTaskService {
  async execute({ id, ...data }: IUpdateTaskDTO) {
    const tasksRepository = dataSource.getRepository(Task);

    const taskRoutines = ["none", "day", "week", "month", "year"];
    if (data.routine && !taskRoutines.includes(data.routine))
      throw new AppError("Invalid routine.");

    const taskStatuses = ["todo", "progress", "done"];
    if (data.status && !taskStatuses.includes(data.status))
      throw new AppError("Invalid status.");

    const task = await tasksRepository.findOne({ where: { id } });
    if (!task) throw new AppError("Task not found.");

    const updatedCategoryData = await tasksRepository.save({ id, ...data });

    return updatedCategoryData;
  }
}
