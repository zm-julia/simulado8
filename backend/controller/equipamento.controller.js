const Cliente = require('../models/Cliente')
const Equipamento = require('../models/Equipamento')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.modelo || !valores.fabricante  || !valores.numeroSerie  || !valores.idCliente ){
        return res.status(400).json({message: 'Preencha todos os campos!'})

    }

    try{
        
        const cliente = await Cliente.findByPk(valores.idCliente)
        if(!cliente){
            return res.status(404).json({message: 'Cliente não encontrado'})

        }

        const numeroSerieCriptografado = CryptoJS.AES.encrypt(valores.numeroSerie, CHAVE_SECRETA).toString()

        await Equipamento.create({
            modelo: valores.modelo, 
            fabricante: valores.fabricante, 
            numeroSerie: numeroSerieCriptografado,
            idCliente: valores.idCliente, 


        })
        return res.status(201).json({message: 'Equipamento cadastrado!'})


    }catch(err){
        console.error('Erro ao cadastrar Equipamento!', err)
        return res.status(500).json({message: 'Erro ao cadastrar Equipamento!'})

    }
}


module.exports = {cadastrar}