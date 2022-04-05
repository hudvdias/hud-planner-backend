import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Goal } from "./Goal";
import { User } from "./User";

@Entity("categories")
export class Category {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "uuid" })
  userId: string;

  @ManyToOne(() => User, (user) => user.categories, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Goal, (goal) => goal.category)
  goals: Goal[];

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
