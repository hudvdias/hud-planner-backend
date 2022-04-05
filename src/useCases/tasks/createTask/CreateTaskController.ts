import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateTaskService } from "./CreateTaskService";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title, date, routine, goalId } = request.body;

    if (!title) throw new AppError("Title is required.");
    if (!date) throw new AppError("Date is required.");
    if (!routine) throw new AppError("Routine is required.");
    if (!goalId) throw new AppError("Goal ID is required.");

    const createTaskService = new CreateTaskService();
    const task = await createTaskService.execute(title, date, routine, goalId);

    return response.status(201).json(task);
  }
}
