import {MigrationInterface, QueryRunner} from "typeorm";

export class dsf1587341544618 implements MigrationInterface {
    name = 'dsf1587341544618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "volunteer" ("rut" integer NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_6c864c17f468724af2f2c466011" PRIMARY KEY ("rut"))`, undefined);
        await queryRunner.query(`CREATE TABLE "service" ("id" character varying NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("rut" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDay" TIMESTAMP NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "phone" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_9f839e522b3b8c8c8223cde81db" PRIMARY KEY ("rut"))`, undefined);
        await queryRunner.query(`CREATE TABLE "social_assistance_event" ("id" character varying NOT NULL, "name" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_c3d5a7c24e9511b327777971f0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_social_assistance_events_social_assistance_event" ("userRut" character varying NOT NULL, "socialAssistanceEventId" character varying NOT NULL, CONSTRAINT "PK_a7c174a99a50577b6a3eda7d8be" PRIMARY KEY ("userRut", "socialAssistanceEventId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_60a2a3042b4517bc2921e107ca" ON "user_social_assistance_events_social_assistance_event" ("userRut") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_062c5463e4dc690c31886b8e8b" ON "user_social_assistance_events_social_assistance_event" ("socialAssistanceEventId") `, undefined);
        await queryRunner.query(`ALTER TABLE "user_social_assistance_events_social_assistance_event" ADD CONSTRAINT "FK_60a2a3042b4517bc2921e107caa" FOREIGN KEY ("userRut") REFERENCES "user"("rut") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user_social_assistance_events_social_assistance_event" ADD CONSTRAINT "FK_062c5463e4dc690c31886b8e8be" FOREIGN KEY ("socialAssistanceEventId") REFERENCES "social_assistance_event"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_social_assistance_events_social_assistance_event" DROP CONSTRAINT "FK_062c5463e4dc690c31886b8e8be"`, undefined);
        await queryRunner.query(`ALTER TABLE "user_social_assistance_events_social_assistance_event" DROP CONSTRAINT "FK_60a2a3042b4517bc2921e107caa"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_062c5463e4dc690c31886b8e8b"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_60a2a3042b4517bc2921e107ca"`, undefined);
        await queryRunner.query(`DROP TABLE "user_social_assistance_events_social_assistance_event"`, undefined);
        await queryRunner.query(`DROP TABLE "social_assistance_event"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "service"`, undefined);
        await queryRunner.query(`DROP TABLE "volunteer"`, undefined);
    }

}
