import { Especialidade } from "../types";

export class Docente {
  constructor(
    private nome: string,
    private email:string,
    private data_nasc: string,
    private turma_id: string,
    public especialidade:Especialidade,
    
  ) {}

   public getDocenteNome = (): string => {
    return this.nome;
  };

  public getDocenteEmail = (): string => {
    return this.email;
  };

  public getDocenteData_nasc = (): string => {
    return this.data_nasc;
  };

  public getDocenteTurma_id = (): string => {
    return this.turma_id;
  };
}