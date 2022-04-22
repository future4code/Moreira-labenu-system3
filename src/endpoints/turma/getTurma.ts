import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function getTurma(
   req: Request,
   res: Response
): Promise<void> {
   try {     
      const result = await connection.raw(`
        SELECT * FROM turma WHERE modulo <> 0
      `)
      console.table(result[0])
      res.status(201).send(result[0])      
      
   } catch (error) {      
        res.status(500).send("Ops! Um erro inesperado ocorreu.")
   }
}


