import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Goal } from "../entities/Goal";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { CreateUsers1649011916068 } from "./migrations/1649011916068-CreateUsers";
import { CreateCategories1649011923985 } from "./migrations/1649011923985-CreateCategories";
import { CreateGoals1649011929914 } from "./migrations/1649011929914-CreateGoals";
import { CreateTasks1649011935230 } from "./migrations/1649011935230-CreateTasks";

dotenv.config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_CONNECTION_HOST!,
  port: Number(process.env.DATABASE_CONNECTION_PORT),
  username: process.env.DATABASE_CONNECTION_USERNAME!,
  password: process.env.DATABASE_CONNECTION_PASSWORD!,
  database: "quests_planner",
  entities: [User, Category, Goal, Task],
  synchronize: true,
  migrations: [
    CreateUsers1649011916068,
    CreateCategories1649011923985,
    CreateGoals1649011929914,
    CreateTasks1649011935230,
  ],
});

dataSource.initialize();
