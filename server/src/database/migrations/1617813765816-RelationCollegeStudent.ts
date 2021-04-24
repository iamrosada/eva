import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCollegeStudent1617813765816 implements MigrationInterface {
    name = 'RelationCollegeStudent1617813765816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "collegeId" character varying`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "hostel" DROP CONSTRAINT "PK_52c522a0fdb9e974bff8ceb35e4"`);
        await queryRunner.query(`ALTER TABLE "hostel" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "hostel" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hostel" ADD CONSTRAINT "PK_52c522a0fdb9e974bff8ceb35e4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "managers" DROP CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff"`);
        await queryRunner.query(`ALTER TABLE "managers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "managers" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "managers" ADD CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "managers" DROP CONSTRAINT "UQ_8d5fd9a2217bf7b16bef11fdf83"`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP CONSTRAINT "PK_f26243224c9a2fd1e2053f003b5"`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD CONSTRAINT "PK_f26243224c9a2fd1e2053f003b5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD "size" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_fc4d101df63871bcd2976a531b6" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_fc4d101df63871bcd2976a531b6"`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD "size" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP CONSTRAINT "PK_f26243224c9a2fd1e2053f003b5"`);
        await queryRunner.query(`ALTER TABLE "postImage" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "postImage" ADD CONSTRAINT "PK_f26243224c9a2fd1e2053f003b5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "managers" ADD CONSTRAINT "UQ_8d5fd9a2217bf7b16bef11fdf83" UNIQUE ("email")`);
        await queryRunner.query(`COMMENT ON COLUMN "managers"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "managers" DROP CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff"`);
        await queryRunner.query(`ALTER TABLE "managers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "managers" ADD "id" NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "managers" ADD CONSTRAINT "PK_e70b8cc457276d9b4d82342a8ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "hostel" DROP CONSTRAINT "PK_52c522a0fdb9e974bff8ceb35e4"`);
        await queryRunner.query(`ALTER TABLE "hostel" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "hostel" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hostel" ADD CONSTRAINT "PK_52c522a0fdb9e974bff8ceb35e4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "college" DROP CONSTRAINT "PK_ebef1972362002203cdf7a22e0c"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "college" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "college" ADD CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "collegeId"`);
    }

}
