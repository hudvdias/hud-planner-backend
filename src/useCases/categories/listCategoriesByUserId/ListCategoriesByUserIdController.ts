import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { ListCategoriesByUserIdService } from "./ListCategoriesByUserIdService";

export class ListCategoriesByUserIdController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;

    if (!userId) throw new AppError("User Id is required.");

    const listUserCategoriesService = new ListCategoriesByUserIdService();

    const categories = await listUserCategoriesService.execute(userId);

    return response.status(200).json(categories);
  }
}
