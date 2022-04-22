import { Module } from "../types";

export class Turma {
  constructor(
    private nome: string,
    public modulo: Module
  ) {}

  public getTurmaNome = (): string => {
    return this.nome;
  };
}
