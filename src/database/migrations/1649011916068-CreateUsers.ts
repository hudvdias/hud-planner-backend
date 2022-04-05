import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1649011916068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "uuid", isUnique: true, isNullable: false },
          { name: "name", type: "varchar" },
          { name: "email", type: "varchar" },
          { name: "image", type: "varchar" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
