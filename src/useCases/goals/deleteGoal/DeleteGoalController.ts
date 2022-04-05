import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { DeleteGoalService } from "./DeleteGoalService";

export class DeleteGoalController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) throw new AppError("Goal Id is required");

    const deleteGoalService = new DeleteGoalService();

    await deleteGoalService.execute(id);

    return response
      .status(200)
      .json({ status: "success", message: "Goal deleted." });
  }
}
