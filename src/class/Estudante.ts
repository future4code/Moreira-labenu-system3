export class Estudante {
    constructor(
        private nome: string,
        private email:string,
        private data_nasc: string,
        private turma_id: string,        
    ) {}

    public getEstudanteNome = (): string => {
        return this.nome;
      };
    
      public getEstudanteEmail = (): string => {
        return this.email;
      };
    
      public getEstudanteData_nasc = (): string => {
        return this.data_nasc;
      };
    
      public getEstudanteTurma_id = (): string => {
        return this.turma_id;
      };
}
