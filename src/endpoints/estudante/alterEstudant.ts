import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function alterEstudant(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const { nome, turma_id} = req.params

      if(!nome || !turma_id){
         res.statusCode = 402
         throw "alteração não efetuada!"
      } 

       await connection.raw(`
       UPDATE estudante 
       SET turma_id = "${turma_id}"  
       WHERE nome = "${nome}"       
      `)
    
      res.status(201).end('Estudante mudado de turma!')          

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}