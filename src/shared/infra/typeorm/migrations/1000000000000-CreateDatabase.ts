import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDatabase1000000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
