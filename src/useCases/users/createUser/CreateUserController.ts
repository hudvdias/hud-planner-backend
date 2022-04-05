import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, image } = request.body;

    if (!email) throw new AppError("Email is required.");

    const createUserService = new CreateUserService();

    const user = await createUserService.execute(email, name, image);

    return response.status(201).json(user);
  }
}
