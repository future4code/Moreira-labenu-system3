import { Request, Response } from "express";
import { Docente } from "../../class/Docente";
import { connection } from "../../data/connection";
import { Especialidade } from "../../types";

export default async function createDocente(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const { nome, email, data_nasc, turma_id} = req.body
      
      if(!nome || !email || !data_nasc || !turma_id){
         res.statusCode = 422
         throw "preenchimento dos campos são obrigatórios!"
      }
      
      const novoDocente = new Docente(nome, email, data_nasc, turma_id, Especialidade.POO)
      await connection("docente").insert({
         id: Date.now(),
         nome: novoDocente.getDocenteNome(),
         email: novoDocente.getDocenteEmail(),
         data_nasc: novoDocente.getDocenteData_nasc(),
         turma_id: novoDocente.getDocenteTurma_id(),
         especialidade: novoDocente.especialidade
      })

      res.status(201).end('Docente cadastrado!')          

   } catch (error: any) {
      if (typeof error === "string") {
         res.send(error)
      } else {         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}