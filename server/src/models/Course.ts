import { Column, Entity,CreateDateColumn, PrimaryColumn, OneToMany} from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";


@Entity("course")
class Course{
    @PrimaryColumn()
    id:string;

    @Column()
    formation:string;

    @OneToMany(type=>Student,course=>Course)
    student:Student[];
    
   
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Course}