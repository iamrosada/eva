import { Response , Request} from "express";
import { getCustomRepository } from "typeorm";
import { multerConfig } from'../config/multer';
import multer from 'multer';
import {ImagePostRepository } from '../repositories/PostImageRepository'    

class PostImage{

        async create( request:Request, response:Response){
            const {originalname:name, size, filename:key} = request.file;
            
            const imagemPostRepository = getCustomRepository(ImagePostRepository);
          
            const imagemStudenty = imagemPostRepository.create({
                name,
                size,
                key,
                url:"",
                
            })
        
            await imagemPostRepository.save(imagemStudenty)
    
            return response.send(imagemStudenty);
    
    
        }
    
       
         async show(request:Request, response:Response){
         
            const countryRepository = getCustomRepository(ImagePostRepository);
    
            const allcountries = await countryRepository.find()
                 console.log(allcountries);
            return response.json(allcountries);
    
        } 
     
    }
    
  


export{PostImage}