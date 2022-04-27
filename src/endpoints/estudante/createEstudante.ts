import { Request, Response } from "express";
import { Estudante } from "../../class/Estudante";
import { connection } from "../../data/connection";

export default async function createEstudante(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const { nome, email, data_nasc, turma_id, hobby } = req.body
      
      if(!nome || !email || !data_nasc || !turma_id || !hobby){
         res.statusCode = 422
         throw "nome, email, data_nasc e turma_id são obrigatórios!"
      }
      const estudanteId = Date.now()
      const novoEstudante = new Estudante(nome, email, data_nasc, turma_id)
      await connection("estudante").insert({
         id: estudanteId, 
         nome: novoEstudante.getEstudanteNome(),
         email: novoEstudante.getEstudanteEmail(),
         data_nasc: novoEstudante.getEstudanteData_nasc(),
         turma_id: novoEstudante.getEstudanteTurma_id()


      })
      
      for(let item of hobby){
      const hobbyId = Date.now()
         await connection('hobby').insert({
            id: hobbyId, 
            nome: item 
         })
         await connection('estudante_hobby').insert({
            estudante_id: estudanteId, 
            hobby_id: hobbyId
         })
      }

      res.status(201).end('Estudante matriculado!')          

   } catch (error: any) {
      if (typeof error === "string") {
         res.send(error)
      } else {         
         //console.log(error.sqlMessage || error.message);
         res.status(500).send(error.sqlMessage || error.message)
      }
   }
}