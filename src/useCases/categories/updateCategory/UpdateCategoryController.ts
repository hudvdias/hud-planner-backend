import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { UpdateCategoryService } from "./UpdateCategoryService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title } = request.body;

    if (!id) throw new AppError("Category Id is required.");

    const updateCategoryService = new UpdateCategoryService();

    const updatedCategoryData = await updateCategoryService.execute({
      id,
      title,
    });

    return response.status(200).json(updatedCategoryData);
  }
}
