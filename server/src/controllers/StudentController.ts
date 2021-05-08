import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { CountriesRepository } from "../repositories/CountriesRepository";
import { RoomsRepository } from "../repositories/RoomsRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";
import { HostelRepository } from "../repositories/HostelsRepository";
import { CollegeRepository } from "../repositories/CollegesRepository";
import { ImagePostRepository } from "../repositories/PostImageRepository";
class StudentController {
    async create(request:Request , response:Response){
       console.log('img',request.file)
        const {surname , full_name,number_phone, country, rooms,hostel,college } = request.body;
        const {originalname:name, size, /* filename: */key, location:url=""} = request.file;
       /*  console.log("aqui do file",request.file)
        process.exit(); */
        let countryId;
        let roomId;
        let hostelId;
        let collegeId;
        let imageId;
        const studentsRepository = getCustomRepository(StudentsRepository);
        const countryRepository =  getCustomRepository(CountriesRepository)
        const roomsRepository = getCustomRepository(RoomsRepository)
        const hostelRepository = getCustomRepository(HostelRepository);
        const collegeRepository = getCustomRepository(CollegeRepository);
        const imageRepository = getCustomRepository(ImagePostRepository);
        
        const stundAlreadyExists = await studentsRepository.findOne({
            number_phone,
        })
        
        const countryUpperCase = country.toUpperCase();
        //console.log(countryUpperCase)
        //process.exit()
        
        const countryAlreadyExists = await countryRepository.findOne({
            countryStudent:countryUpperCase
        })
         
        const roomAlreadyExist = await  roomsRepository.findOne({
            numberofRoom:rooms
        })
        const hostelAlreadyExist = await hostelRepository.findOne({
            number_hostel:hostel

        })
        const collegereadyExist = await collegeRepository.findOne({
            name_faculty:college 

        })
        const imagemAlreadyExist = await imageRepository.findOne({
            key:request.file.filename
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
        
        if(!roomAlreadyExist){
            const newRoom = await roomsRepository.create({
                numberofRoom:rooms
            })
            await roomsRepository.save(newRoom);
            roomId = newRoom.id;
        }
        else roomId = roomAlreadyExist.id;
        if(!hostelAlreadyExist){
            const newHostel = await hostelRepository.create({
                number_hostel:hostel 
            })
            await hostelRepository.save(newHostel);
            hostelId = newHostel.id;
        }
        else hostelId = hostelAlreadyExist.id;
        if(!collegereadyExist){
            const newcollege = await collegeRepository.create({
                name_faculty:college 
            })
            await collegeRepository.save(newcollege);
            collegeId = newcollege.id;
        }
        else collegeId = collegereadyExist.id;
     
        if(!imagemAlreadyExist){
            const newImage = imageRepository.create({
                name,
                size,
                key,
                url,
                
            })

            await imageRepository.save(newImage);
            imageId = newImage.id; 
        }
        else imageId = imagemAlreadyExist.id;
     
   
   
        const student = studentsRepository.create({
            surname, 
            full_name,
            number_phone,
            country:countryId,
            rooms:roomId,
            hostel:hostelId,
            college:collegeId,
            imagepost:imageId
        })
        

        await studentsRepository.save(student)

        return response.send(student);


    }

    async show(request:Request, response:Response){
     
        const studentsRepository = getCustomRepository(StudentsRepository);

        const allStudents = await studentsRepository.find()
   
        return response.json(allStudents);

    }
    async showforSurname(request:Request, response:Response){
       
        const studentsRepository = getCustomRepository(StudentsRepository);

        const allStudents = await studentsRepository.findOne(request.params)
      
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
