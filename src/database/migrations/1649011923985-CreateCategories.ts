import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1649011923985 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          { name: "id", type: "uuid", isUnique: true, isNullable: false },
          { name: "title", type: "varchar" },
          { name: "userId", type: "uuid" },
        ],
        foreignKeys: [
          {
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("categories");
  }
}
