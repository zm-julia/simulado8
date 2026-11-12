let btn_cadastrar = document.getElementById('btn_cadastrar')
let resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const funcionario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }

    fetch(`http://localhost:3000/funcionario`, {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(funcionario)
    })
    .then(res => res.json())
    .then(dados=>{
        resposta.innerHTML = `<p>${dados.message}</p>`
        document.querySelector('form')
    })


})


.catch(err =>{
    console.error('Erro ao cadastrar funcionario!', err)
    resposta.innerHTML = `<p>Erro ao cadastrar funcionario!</p>`

})