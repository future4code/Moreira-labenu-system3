import app from "./app"
import alterDocente from "./endpoints/docente/alterDocente"
import createDocente from "./endpoints/docente/createDocente"
import getDocente from "./endpoints/docente/getDocente"
import alterEstudant from "./endpoints/estudante/alterEstudant"
import createEstudante from "./endpoints/estudante/createEstudante"
import getEstudant from "./endpoints/estudante/getEstudant"
import alterTurma from "./endpoints/turma/alterTurma"
import createTurma from './endpoints/turma/createTurma'
import getTurma from "./endpoints/turma/getTurma"

app.post('/turma', createTurma)
app.get('/turma/modulo', getTurma)
app.patch('/turma/:modulo/:id', alterTurma)

app.post('/estudant', createEstudante)
app.get('/estudant/:nome', getEstudant)
app.patch('/estudante/:turma_id/:nome', alterEstudant)

app.post('/docente', createDocente)
app.get('/docente', getDocente)
app.patch('/docente/:turma_id/:nome', alterDocente)