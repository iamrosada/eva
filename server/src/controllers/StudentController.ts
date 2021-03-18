import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { StudentsRepository } from "../repositories/StudentsRepository";


class StudentController {
    async create(request:Request , response:Response){
       
        const {surname , full_name,number_phone, country, rooms} = request.body;

        const studentsRepository = getCustomRepository(StudentsRepository);

        const stundAlreadyExists = await studentsRepository.findOne({
            number_phone,
        })

        if(stundAlreadyExists){
            return response.status(400).json({
                error:"Studen already exits",
            })
        
        }

        const student = studentsRepository.create({
            surname , full_name,number_phone,country, rooms
        })
        
        await studentsRepository.save(student)

        return response.send(student);


    }

    async show(request:Request, response:Response){
     
        const studentsRepository = getCustomRepository(StudentsRepository);

        const allStudents = await studentsRepository.find()

        return response.json(allStudents);

    }

    async update(request:Request, response:Response):Promise<Response>{
        const studentsRepository = getCustomRepository(StudentsRepository);
        
        const student = await studentsRepository.findOne(request.params.id);
        
        if (student) {
            getCustomRepository(StudentsRepository).merge(student, request.body);
            const results = await getCustomRepository(StudentsRepository).save(student);
            return response.json(results);
          }
          
          return response.json({error: 'Not student  found'});

      }

      async delete(request:Request,response:Response):Promise<Response>{
        const studentsRepository = getCustomRepository(StudentsRepository);
        const results = await getCustomRepository(StudentsRepository).delete(request.params.id);
        
        return response.json({msg: "the user has been deleted"});
        
      }

}

export {StudentController}