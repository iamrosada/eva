import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCoutry1615079120379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"countries",
                columns:[
                    
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"countryStudent",
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
        queryRunner.dropTable("countries")
    }

}
