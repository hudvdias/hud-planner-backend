import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateGoalService } from "./CreateGoalService";

export class CreateGoalController {
  async handle(request: Request, response: Response) {
    const { title, categoryId } = request.body;

    if (!title) throw new AppError("Title is required.");
    if (!categoryId) throw new AppError("Category Id is required.");

    const createGoalService = new CreateGoalService();

    const goal = await createGoalService.execute(title, categoryId);

    return response.status(201).json(goal);
  }
}
