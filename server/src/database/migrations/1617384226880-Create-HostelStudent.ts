import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHostelStudent1617384226880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"hostel",
                 columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"number_hostel",
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
        await queryRunner.dropTable("hostel");
    }

}
