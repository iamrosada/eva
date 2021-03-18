import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudenty1614992773415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"students",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"surname",
                        type:"varchar"
                    },
                    {
                        name:"full_name",
                        type:"varchar"
                    },
                  
                    {
                        name:"number_phone",
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
        await queryRunner.dropTable("students");
    }

}
