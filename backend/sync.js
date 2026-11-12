const {Funcionario, Cliente, Equipamento, Inspecao} = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase() {
     try{
        await conn.sync({force: true})
        console.log('Conectando com o banco de dados!')
     }catch(err){
        console.error('Erro de conexão com o banco de dados!', err)

     }finally{
        console.log('Finalizando conexão com o banco de dados!')

     }
}

syncDataBase()