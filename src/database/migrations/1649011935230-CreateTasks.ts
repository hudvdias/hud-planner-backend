import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1649011935230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          { name: "id", type: "uuid", isUnique: true, isNullable: false },
          { name: "title", type: "varchar" },
          { name: "status", type: "varchar" },
          { name: "date", type: "timestamp" },
          { name: "routine", type: "varchar" },
          { name: "goalId", type: "uuid" },
        ],
        foreignKeys: [
          {
            columnNames: ["goalId"],
            referencedColumnNames: ["id"],
            referencedTableName: "goals",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
