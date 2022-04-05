import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Error treatment
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

app.listen(process.env.PORT || 3333, () => console.log("Server is Running!"));
