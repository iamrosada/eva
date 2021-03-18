import { Column, Entity,CreateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";

@Entity("countries")
class Country {
    @PrimaryColumn()
    id:string;

    @Column()
    countryStudent:string;

    @OneToMany(type=>Student,country=>Country)
    student:Student[];
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Country}