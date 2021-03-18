import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("managers")
class Manager{
 @PrimaryGeneratedColumn("uuid")
 id:string;
 
 @Column()
 name:string;

 @Column()
 email:string;

 @Column()
 password:string;

 @CreateDateColumn()
 created_at:Date;

 @UpdateDateColumn()
 updated_at:Date;

}

export {Manager}