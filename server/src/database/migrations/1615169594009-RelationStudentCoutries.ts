import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStudentCoutries1615169594009 implements MigrationInterface {
    name = 'RelationStudentCoutries1615169594009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "countryId" character varying`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "PK_7d7f07271ad4ce999880713f05e"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "countries" DROP CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18"`);
        await queryRunner.query(`ALTER TABLE "countries" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "countries" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "countries" ADD CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP CONSTRAINT "PK_90c8ad4889139688af6714d7890"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD CONSTRAINT "PK_90c8ad4889139688af6714d7890" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP COLUMN "numberofRoom"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD "numberofRoom" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_380a3c8cbf9f0601a33c8f0744f" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_380a3c8cbf9f0601a33c8f0744f"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP COLUMN "numberofRoom"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD "numberofRoom" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP CONSTRAINT "PK_90c8ad4889139688af6714d7890"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bedrooms" ADD CONSTRAINT "PK_90c8ad4889139688af6714d7890" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "countries" DROP CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18"`);
        await queryRunner.query(`ALTER TABLE "countries" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "countries" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "countries" ADD CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "PK_7d7f07271ad4ce999880713f05e"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "countryId"`);
    }

}
