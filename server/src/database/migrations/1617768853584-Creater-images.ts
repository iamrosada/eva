import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreaterImages1617768853584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"postImage",
                 columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"size",
                        type:"varchar"
                    },
                    {
                        name:"key",
                        type:"varchar"
                    },
                    {
                        name:"url",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ]
                   
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("postImage");
    }

}
