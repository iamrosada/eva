import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

import { v4 as uuid} from "uuid"
import { CollegeStudenty } from "./College";
import { Country } from "./Country";
import { HostelStudenty } from "./Hostel";
import { ImageStudenty } from "./Post";
import { Room } from "./Room";

@Entity("students")
 class Student{
     @PrimaryColumn()
     id: string;
     
     @Column()
     surname:string;
  
     @Column()
     full_name:string;
  
     @ManyToOne(type=>Country,student=>Student,{eager:true})
     country:Country;

     @ManyToOne(type=>Room, students=>Student,{eager:true})
     rooms: Room[];

     @ManyToOne(type=>CollegeStudenty, students=>Student,{eager:true})
     college:CollegeStudenty[];

     @ManyToOne(type=>HostelStudenty, students=>Student,{eager:true})
     hostel:HostelStudenty[];

     @ManyToOne(type=>ImageStudenty, students=>Student,{eager:true})
     imagepost:ImageStudenty; 
     
     @Column()
     number_phone:string;
     
     @CreateDateColumn()
     created_at:Date;


     constructor(){
         if(!this.id){
             this.id = uuid();
         }
     }



 }


 export {Student}