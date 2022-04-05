import { Router } from "express";
import { CreateGoalController } from "../useCases/goals/createGoal/CreateGoalController";
import { DeleteGoalController } from "../useCases/goals/deleteGoal/DeleteGoalController";
import { ListGoalsByCategoryIdController } from "../useCases/goals/listGoalsByCategoryId/ListGoalsByCategoryIdController";
import { UpdateGoalController } from "../useCases/goals/updateGoal/UpdateGoalController";

export const goalsRoutes = Router();

const createGoalController = new CreateGoalController();
const listGoalsByCategoryId = new ListGoalsByCategoryIdController();
const updateGoalController = new UpdateGoalController();
const deleteGoalController = new DeleteGoalController();

goalsRoutes.get("/goals", listGoalsByCategoryId.handle);
goalsRoutes.post("/goals", createGoalController.handle);
goalsRoutes.put("/goals/:id", updateGoalController.handle);
goalsRoutes.delete("/goals/:id", deleteGoalController.handle);
