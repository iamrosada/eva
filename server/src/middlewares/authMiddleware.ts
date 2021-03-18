import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

interface TokenPayload{
  id:string;
  iat:number;
  exp:number;
}
class Auth{
  async authMiddleware(request:Request, response:Response, next: NextFunction){

    const {authorization} = request.headers;
    
    if(!authorization){
      return response.status(400).json({
        error:"JWT token is missing",
    })
    }

    const token = authorization.replace('Bearer','').trim();

    try{
         const data =  jwt.verify(token,'secret')
         
         const {id} = data as TokenPayload;

         request.managerId = id;

         return next();

    }catch{
      return response.status(400).json({
        error:"Invalid JWT token",
    })
    }
  }
}

export {Auth}