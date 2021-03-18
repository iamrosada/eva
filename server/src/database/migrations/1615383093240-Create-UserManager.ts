import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserManager1615383093240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"managers",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:"uuid_generate_v4()",
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"password",
                        type:"varchar"
                       
                    },

                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("managers")
    }

}
