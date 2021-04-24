import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationHostelstudenty1617836041046 implements MigrationInterface {
    name = 'RelationHostelstudenty1617836041046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "hostelId" character varying`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_3a4d21c18539d764cddd76e8be3" FOREIGN KEY ("hostelId") REFERENCES "hostel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_3a4d21c18539d764cddd76e8be3"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "hostelId"`);
    }

}
