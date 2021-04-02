import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import {  CountriesRepository } from "../repositories/CountriesRepository";

class CountryController{

    async create( request:Request, response:Response){
        const { countryStudent} = request.body;

        const countryRepository = getCustomRepository(CountriesRepository);
        const countryUpperCase = countryStudent.toUpperCase();
        // console.log(countryUpperCase)
        //process.exit()
        const countryAlreadyExists = await countryRepository.findOne({
            countryStudent:countryUpperCase,
        })

        if(countryAlreadyExists){
            return response.status(400).json({
                error:"Country already exits",
            })
        
        }

        const CountryStudenty = countryRepository .create({
            countryStudent:countryUpperCase,
        })
        
        await countryRepository.save(CountryStudenty)

        return response.send(CountryStudenty);


    }

   
    async show(request:Request, response:Response){
     
        const countryRepository = getCustomRepository(CountriesRepository);

        const allcountries = await countryRepository.find()
             console.log(allcountries);
        return response.json(allcountries);

    }
 
}

export {CountryController}