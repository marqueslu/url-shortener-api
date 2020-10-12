import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class AddUuidOssp1000000000001 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }

  async down(queryRunner: QueryRunner): Promise<void> {}
}
