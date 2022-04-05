import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Category } from "./Category";
import { Task } from "./Task";

@Entity("goals")
export class Goal {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "uuid" })
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.goals, {
    onDelete: "CASCADE",
  })
  category: Category;

  @OneToMany(() => Task, (task) => task.goal)
  tasks: Task[];

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
