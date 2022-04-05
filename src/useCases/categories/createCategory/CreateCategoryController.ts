import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { title, userId } = request.body;

    if (!title) throw new AppError("Title is required.");
    if (!userId) throw new AppError("User ID is required.");

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(title, userId);
    return response.status(201).json(category);
  }
}
