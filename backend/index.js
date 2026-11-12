const express = require('express')
const app = express()
const cors = require('cors')


const conn = require('./db/conn')

require('./models/rel')

const funcionarioController = require('./controller/funcionario.controller')
const clienteController = require('./controller/cliente.controller')
const equipamentoController = require('./controller/equipamento.controller')
const inspecaoController = require('./controller/inspecao.controller')
const hostname = 'localhost'
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


//rotas publias 

app.post('/funcionario', funcionarioController.cadastrar)

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!'})
})


//mdd

//rotas privadas 

//cliente

app.post('/cliente', clienteController.cadastrar)

//equipamento
app.post('/equipamento', equipamentoController.cadastrar)




conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})

.catch(err=>{
    console.error('Erro ao conectar com o servidor!', err)
})