import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGoals1649011929914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "goals",
        columns: [
          { name: "id", type: "uuid", isUnique: true, isNullable: false },
          { name: "title", type: "varchar" },
          { name: "categoryId", type: "uuid" },
        ],
        foreignKeys: [
          {
            columnNames: ["categoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("goals");
  }
}
