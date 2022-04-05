import { Router } from "express";
import { CreateUserController } from "../useCases/users/createUser/CreateUserController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/users", createUserController.handle);
