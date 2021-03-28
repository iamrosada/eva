import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { CountriesRepository } from "../repositories/CountriesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";


class StudentController {
    async create(request:Request , response:Response){
        //console.log(request.body)
        const {surname , full_name,number_phone, country, rooms} = request.body;
        let countryId;
        const studentsRepository = getCustomRepository(StudentsRepository);
        const countryRepository =  getCustomRepository(CountriesRepository)

        const stundAlreadyExists = await studentsRepository.findOne({
            number_phone,
        })
        
        const countryUpperCase = country.toUpperCase();
        //console.log(countryUpperCase)
        //process.exit()

        const countryAlreadyExists = await countryRepository.findOne({
            countryStudent:countryUpperCase 
        })

        console.log(countryAlreadyExists)

        if(stundAlreadyExists){
            return response.status(400).json({
                error:"Student already exits",
            })
        
         }

        if(!countryAlreadyExists){
            const newCountry = await countryRepository.create({
                countryStudent:countryUpperCase
            })
           
            await countryRepository.save(newCountry)
            countryId = newCountry.id;
        }
        else  countryId = countryAlreadyExists.id;
   

        const student = studentsRepository.create({
            surname, 
            full_name,
            number_phone,
            country:countryId,
            rooms
        })
        

        await studentsRepository.save(student)

        return response.send(student);


    }

    async show(request:Request, response:Response){
     
        const studentsRepository = getCustomRepository(StudentsRepository);

        const allStudents = await studentsRepository.find()
        //const allStudents = await studentsRepository.findOne(request.params.surname)
        return response.json(allStudents);

    }
    async showforSurname(request:Request, response:Response){
       // const {surname} = request.body;
        const studentsRepository = getCustomRepository(StudentsRepository);

        const allStudents = await studentsRepository.findOne(request.params)
        /*const allStudents = await studentsRepository.findOne({
         surname,
        })*/
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