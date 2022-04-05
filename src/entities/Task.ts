import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Goal } from "./Goal";

@Entity("tasks")
export class Task {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "timestamp" })
  date: number;

  @Column({ type: "varchar" })
  routine: string;

  @Column({ type: "uuid" })
  goalId: string;

  @ManyToOne(() => Goal, (goal) => goal.tasks, { onDelete: "CASCADE" })
  goal: Goal;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }

    if (!this.status) {
      this.status = "todo";
    }

    if (!this.routine) {
      this.routine = "none";
    }
  }
}
