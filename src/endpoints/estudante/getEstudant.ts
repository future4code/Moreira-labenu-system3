import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function getEstudant(
   req: Request,
   res: Response
): Promise<void> {
   try { 
       const { nome } = req.params
       if(!nome){
           res.statusCode = 404
           throw "nome não encontrado!"
       }    
      const result = await connection.raw(`
        SELECT * FROM estudante WHERE nome = "${nome}"  
      `)
      
      res.status(201).send(result[0])      
      
   } catch (error) {      
        res.status(500).send("Ops! Um erro inesperado ocorreu.")
   }
}
