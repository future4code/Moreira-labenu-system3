import { Request, Response } from "express";
import { Turma } from "../../class/Turma";
import { connection } from "../../data/connection";

export default async function getDocente(
   req: Request,
   res: Response
): Promise<void> {
   try { 
      const response: Turma[] = await connection("turma")
      //.whereIn("modulo", [1, 2, 3, 4, 5, 6])
      res.status(201).send(response)      
      
   } catch (error) {      
        res.status(500).send("Ops! Um erro inesperado ocorreu.")
   }
}
