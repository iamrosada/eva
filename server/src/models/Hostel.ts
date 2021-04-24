import { Column, Entity,CreateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";


@Entity("hostel")
class HostelStudenty {
    @PrimaryColumn()
    id:string;

    @Column()
    number_hostel:string;

    @OneToMany(type=>Student, hostel=>HostelStudenty)
    students: Student;
   
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{HostelStudenty}