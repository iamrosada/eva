import {MigrationInterface, QueryRunner} from "typeorm";

export class RealtionRoomsStudent1615331322255 implements MigrationInterface {
    name = 'RealtionRoomsStudent1615331322255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "roomsId" character varying`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_f73fb83cb6d1c3b7a2977082666" FOREIGN KEY ("roomsId") REFERENCES "bedrooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_f73fb83cb6d1c3b7a2977082666"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "roomsId"`);
    }

}
