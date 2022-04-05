import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { UpdateGoalService } from "./UpdateGoalService";

export class UpdateGoalController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title } = request.body;

    if (!id) throw new AppError("Goal Id is required.");

    const updateGoalService = new UpdateGoalService();

    const updatedGoalData = await updateGoalService.execute({
      id,
      title,
    });

    return response.status(200).json(updatedGoalData);
  }
}
