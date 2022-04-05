import { Router } from "express";
import { CreateCategoryController } from "../useCases/categories/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "../useCases/categories/deleteCategory/DeleteCategoryController";
import { ListCategoriesByUserIdController } from "../useCases/categories/listCategoriesByUserId/ListCategoriesByUserIdController";
import { UpdateCategoryController } from "../useCases/categories/updateCategory/UpdateCategoryController";

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesByUserIdController = new ListCategoriesByUserIdController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.get("/categories", listCategoriesByUserIdController.handle);
categoriesRoutes.post("/categories", createCategoryController.handle);
categoriesRoutes.put("/categories/:id", updateCategoryController.handle);
categoriesRoutes.delete("/categories/:id", deleteCategoryController.handle);
