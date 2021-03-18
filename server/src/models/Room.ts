import { Column, Entity,CreateDateColumn, PrimaryColumn,  OneToMany } from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";

@Entity("bedrooms")
class Room {
    @PrimaryColumn()
    id:string;

    @Column()
    numberofRoom:number;
    
    @OneToMany(type=>Student, rooms=>Room)
    students: Student;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }


}

export {Room}