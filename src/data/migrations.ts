import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS turma (
         id INT PRIMARY KEY AUTO_INCREMENT,
         nome VARCHAR(255),
         modulo VARCHAR(255) DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS estudante (
         id INT PRIMARY KEY AUTO_INCREMENT,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         data_nasc DATE NOT NULL,
         turma_id INT, 
         FOREIGN KEY(turma_id) REFERENCES turma(id)
      );
      CREATE TABLE IF NOT EXISTS hobby (
         id INT PRIMARY KEY AUTO_INCREMENT,
         nome VARCHAR(255) NOT NULL UNIQUE
      );
      CREATE TABLE IF NOT EXISTS estudante_hobby (
         id INT PRIMARY KEY AUTO_INCREMENT,
         estudante_id INT, 
         FOREIGN KEY(estudante_id) REFERENCES estudante(id),
         hobby_id INT,
         FOREIGN KEY(hobby_id) REFERENCES hobby(id)
      );      
      CREATE TABLE IF NOT EXISTS docente (
         id INT PRIMARY KEY AUTO_INCREMENT,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         data_nasc DATE NOT NULL,
         turma_id INT,
         FOREIGN KEY(turma_id) REFERENCES turma(id)
      );
      CREATE TABLE IF NOT EXISTS especialidade (
         id INT PRIMARY KEY AUTO_INCREMENT,
         nome VARCHAR(255) DEFAULT 'JS' 
      );
      CREATE TABLE IF NOT EXISTS docente_especialidade (
         id INT PRIMARY KEY AUTO_INCREMENT,
         docente_id INT,
         FOREIGN KEY(docente_id) REFERENCES docente(id),
         especialidade_id INT,
         FOREIGN KEY(especialidade_id) REFERENCES especialidade(id) 
      );      

   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .finally(closeConnection)