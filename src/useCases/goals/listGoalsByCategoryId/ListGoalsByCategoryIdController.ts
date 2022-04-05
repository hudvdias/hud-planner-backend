import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { ListGoalsByCategoryIdService } from "./ListGoalsByCategoryIdService";

export class ListGoalsByCategoryIdController {
  async handle(request: Request, response: Response) {
    const { categoryId } = request.body;

    if (!categoryId) throw new AppError("Category Id is required.");

    const listGoalsByCategoryIdService = new ListGoalsByCategoryIdService();

    const goals = await listGoalsByCategoryIdService.execute(categoryId);

    return response.status(200).json(goals);
  }
}
