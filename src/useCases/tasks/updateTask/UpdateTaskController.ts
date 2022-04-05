import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { UpdateTaskService } from "./UpdateTaskService";

export class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, status, routine, date } = request.body;

    if (!id) throw new AppError("Task Id is required.");

    const updateTaskService = new UpdateTaskService();

    const updatedTaskData = await updateTaskService.execute({
      id,
      title,
      status,
      routine,
      date,
    });

    return response.status(200).json(updatedTaskData);
  }
}
