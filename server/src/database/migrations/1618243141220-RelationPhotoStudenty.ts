import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationPhotoStudenty1618243141220 implements MigrationInterface {
    name = 'RelationPhotoStudenty1618243141220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "imagepostId" character varying`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_57ffeb03325de10e05acc73433c" FOREIGN KEY ("imagepostId") REFERENCES "postImage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_57ffeb03325de10e05acc73433c"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "imagepostId"`);
    }

}
