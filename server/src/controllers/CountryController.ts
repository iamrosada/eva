import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { CountriesRepository } from "../repositories/CountriesRepository";

class CountryController{

    async create( request:Request, response:Response){
        const { countryStudent} = request.body;

        const countryRepository = getCustomRepository(CountriesRepository);
        const stundAlreadyExists = await countryRepository.findOne({
            countryStudent,
        })

        if(stundAlreadyExists){
            return response.status(400).json({
                error:"Country already exits",
            })
        
        }

        const CountryStudenty = countryRepository .create({
            countryStudent,
        })
        
        await countryRepository.save(CountryStudenty)

        return response.send(CountryStudenty);


    }

   
    async show(request:Request, response:Response){
     
        const countryRepository =getCustomRepository(CountriesRepository);

        const allcountries = await countryRepository.find()

        return response.json(allcountries);

    }


}

export {CountryController}