import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";

import {HostelRepository} from '../repositories/HostelsRepository'

class HostelController{

    async create( request:Request, response:Response){
        const {number_hostel} = request.body;

        const countryRepository = getCustomRepository(HostelRepository);
        
      
        const countryAlreadyExists = await countryRepository.findOne({
            number_hostel
        })

        if(countryAlreadyExists){
            return response.status(400).json({
                error:"Hostel already exits",
            })
        
        }

        const CountryStudenty = countryRepository.create({
            number_hostel

        })
        
        await countryRepository.save(CountryStudenty)

        return response.send(CountryStudenty);


    }

   
    async show(request:Request, response:Response){
     
        const countryRepository = getCustomRepository(HostelRepository);

        const allcountries = await countryRepository.find()
             console.log(allcountries);
        return response.json(allcountries);

    }
 
}

export {HostelController}