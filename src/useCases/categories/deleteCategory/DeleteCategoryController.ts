import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { DeleteCategoryService } from "./DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) throw new AppError("Category Id is required");

    const deleteCategoryService = new DeleteCategoryService();

    await deleteCategoryService.execute(id);

    return response
      .status(200)
      .json({ status: "success", message: "Category deleted." });
  }
}
