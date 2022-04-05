import { Router } from "express";
import { CreateTaskController } from "../useCases/tasks/createTask/CreateTaskController";
import { DeleteTaskController } from "../useCases/tasks/deleteTask/DeleteTaskController";
import { ListTasksByGoalIdController } from "../useCases/tasks/listTasksByGoalId/ListTasksByGoalIdController";
import { UpdateTaskController } from "../useCases/tasks/updateTask/UpdateTaskController";

export const taskRoutes = Router();

const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const listTasksByGoalIdController = new ListTasksByGoalIdController();
const deleteTaskController = new DeleteTaskController();

taskRoutes.get("/tasks", listTasksByGoalIdController.handle);
taskRoutes.post("/tasks", createTaskController.handle);
taskRoutes.put("/tasks/:id", updateTaskController.handle);
taskRoutes.delete("/tasks/:id", deleteTaskController.handle);
