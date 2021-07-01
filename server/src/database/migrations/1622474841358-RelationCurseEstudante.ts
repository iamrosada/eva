import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCurseEstudante1622474841358 implements MigrationInterface {
    name = 'RelationCurseEstudante1622474841358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "courseId" character varying`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "PK_bf95180dd756fd204fb01ce4916"`);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "course" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_448cf5bf72943cda0ff722bc7b7" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_448cf5bf72943cda0ff722bc7b7"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "PK_bf95180dd756fd204fb01ce4916"`);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "course" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "courseId"`);
    }

}
