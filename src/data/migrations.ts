import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS turma (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255),
      modulo VARCHAR(255) DEFAULT 0
   );
   CREATE TABLE IF NOT EXISTS estudante (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      data_nasc DATE NOT NULL,
      turma_id VARCHAR(255), 
      FOREIGN KEY(turma_id) REFERENCES turma(id)
   );
   CREATE TABLE IF NOT EXISTS hobby (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL UNIQUE
   );
   CREATE TABLE IF NOT EXISTS estudante_hobby (
      estudante_id VARCHAR(255) NOT NULL,
      hobby_id VARCHAR(255) NOT NULL,
      PRIMARY KEY(estudante_id, hobby_id),
      FOREIGN KEY(estudante_id) REFERENCES estudante(id),
      FOREIGN KEY(hobby_id) REFERENCES hobby(id)
   );      
   CREATE TABLE IF NOT EXISTS docente (
      id VARCHAR(255)PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      data_nasc DATE NOT NULL,
      turma_id VARCHAR(255),
      FOREIGN KEY(turma_id) REFERENCES turma(id)
   );
   CREATE TABLE IF NOT EXISTS especialidade (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) DEFAULT 'JS' 
   );
   CREATE TABLE IF NOT EXISTS docente_especialidade (
      docente_id VARCHAR(255) NOT NULL,
      especialidade_id VARCHAR(255) NOT NULL,
      PRIMARY KEY(docente_id, especialidade_id),
      FOREIGN KEY(docente_id) REFERENCES docente(id),
      FOREIGN KEY(especialidade_id) REFERENCES especialidade(id) 
   );    
   

   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .finally(closeConnection)