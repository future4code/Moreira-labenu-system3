import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function alterTurma(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const { id, modulo} = req.params

      if(!modulo || !id){
         res.statusCode = 402
         throw "alteração não efetuada!"
      } 

       await connection.raw(`
       UPDATE turma SET modulo = "${modulo}"  WHERE id = "${id}"       
      `)
    
      res.status(201).end('turma mudada de módulo!')          

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}