import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration21587177453726 implements MigrationInterface {
    name = 'InitialMigration21587177453726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "volunteer" ("rut" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6c864c17f468724af2f2c466011" PRIMARY KEY ("rut"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "volunteer"`, undefined);
    }

}
