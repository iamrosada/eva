import { Column, Entity,CreateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid"
import { Student } from "./Student";


@Entity("postImage")
class ImageStudenty {
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    size:number;

    @Column()
    key:string;
    

   @OneToMany(type=>Student, imagepost=>ImageStudenty)
   students: Student; 

    @Column()
    url:string;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{ImageStudenty}