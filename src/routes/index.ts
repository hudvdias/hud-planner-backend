import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { goalsRoutes } from "./goals.routes";
import { taskRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use(usersRoutes);
routes.use(categoriesRoutes);
routes.use(goalsRoutes);
routes.use(taskRoutes);
