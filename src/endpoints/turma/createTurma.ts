import { Request, Response } from "express";
import { Turma } from "../../class/Turma";
import { connection } from "../../data/connection";
import { Module } from "../../types";

export default async function createTurma(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const { nome } = req.body
      
      if(!nome){
         res.statusCode = 422
         throw "name e modulo são obrigatórios"
      }
      const novaTurma = new Turma( nome, Module.five);
      await connection("turma").insert({
         nome: novaTurma.getTurmaNome(),
         modulo: novaTurma.modulo
      })
      
      res.status(201).end('turma criada!')          

   } catch (error: any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}