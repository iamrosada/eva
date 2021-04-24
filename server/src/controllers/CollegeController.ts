import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";

import {CollegeRepository} from '../repositories/CollegesRepository'

class CollegeController{

    async create( request:Request, response:Response){
        const {name_faculty} = request.body;

        const collegeRepository = getCustomRepository(CollegeRepository);
        
      
        const collegeAlreadyExists = await collegeRepository.findOne({
            name_faculty
        })

        if(collegeAlreadyExists){
            return response.status(400).json({
                error:"College already exits",
            })
        
        }

        const collegeStudenty = collegeRepository.create({
            name_faculty

        })
        
        await collegeRepository.save(collegeStudenty)

        return response.send(collegeStudenty);


    }

   
    async show(request:Request, response:Response){
     
        const collegeRepository = getCustomRepository(CollegeRepository);

        const allcolleges = await collegeRepository.find()
             console.log(allcolleges);
        return response.json(allcolleges);

    }
 
}

export {CollegeController}