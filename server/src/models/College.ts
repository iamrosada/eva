import { Column, Entity,CreateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";


@Entity("college")
class CollegeStudenty {
    @PrimaryColumn()
    id:string;

    @Column()
    name_faculty:string;

    @OneToMany(type=>Student, college=>CollegeStudenty)
    students:Student;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{CollegeStudenty}