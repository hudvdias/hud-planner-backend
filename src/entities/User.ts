import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Category } from "./Category";

@Entity("users")
export class User {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  image: string;

  @OneToMany(() => Category, (category) => category.user, {
    onDelete: "CASCADE",
  })
  categories: Category[];

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
