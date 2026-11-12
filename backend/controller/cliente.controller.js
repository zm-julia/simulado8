const Cliente = require('../models/Cliente')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.cpf ){
        return res.status(400).json({message: 'Preencha todos os campos!'})

    }

    try{

        const cpfCriptografado = CryptoJS.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

        await Cliente.create({
            nome: valores.nome, 
            cpf: cpfCriptografado

        })
        return res.status(201).json({message: 'Cliente cadastrado!'})


    }catch(err){
        console.error('Erro ao cadastrar Cliente!', err)
        return res.status(500).json({message: 'Erro ao cadastrar Cliente!'})

    }
}


module.exports = {cadastrar}