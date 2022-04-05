import { Request, Response } from "express";
import { ListTasksByGoalIdService } from "./ListTasksByGoalIdService";

export class ListTasksByGoalIdController {
  async handle(request: Request, response: Response) {
    const { goalId } = request.body;

    const listTasksByGoalIdService = new ListTasksByGoalIdService();

    const tasks = await listTasksByGoalIdService.execute(goalId);

    return response.status(200).json(tasks);
  }
}
