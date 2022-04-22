export enum Especialidade {
   JS = "JS",
   CSS = "CSS",
   React = "React",
   Typescript = "Typescript",
   POO = "POO"
}

export enum Module {
   zero = 0,
   one = 1,
   two = 2,
   three = 3,
   four = 4,
   five = 5,
   six = 6
}

export type turma = {
   id: number,
   nome: string,
   modulo: Module,
   docente: docente[],
   estudant: estudante[]
}

export type estudante = {
   id: number,
   nome: string,
   email: string,
   data_nasc: Date,
   turma_id: number,
   hobbies: string[]
}

export type docente = {
   id: number,
   nome: string,
   email: string,
   data_nasc: Date,
   turma_id: number,
   especialidade: Especialidade
}

