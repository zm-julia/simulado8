let btn_cadastrar = document.getElementById('btn_cadastrar')
let resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const cliente = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
 
    }

    fetch(`http://localhost:3000/cliente`, {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
    .then(res => res.json())
    .then(dados=>{
        resposta.innerHTML = `<p>${dados.message}</p>`
        document.querySelector('form')
    })


})


.catch(err =>{
    console.error('Erro ao cadastrar cliente!', err)
    resposta.innerHTML = `<p>Erro ao cadastrar cliente!</p>`

})