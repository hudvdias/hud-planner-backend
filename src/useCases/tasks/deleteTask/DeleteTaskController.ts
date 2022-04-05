import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { DeleteTaskService } from "./DeleteTaskService";

export class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    if (!id) throw new AppError("Task Id is required.");

    const deleteTaskService = new DeleteTaskService();
    await deleteTaskService.execute(id);

    return response
      .status(200)
      .json({ status: "success", message: "Task deleted." });
  }
}
