let btn_cadastrar = document.getElementById('btn_cadastrar')
let resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const equipamento = {
        modelo: document.getElementById('modelo').value,
        fabricante: document.getElementById('fabricante').value,
        numeroSerie: document.getElementById('numeroSerie').value,
        idCliente: Number(document.getElementById('idCliente').value)
 
    }

    fetch(`http://localhost:3000/equipamento`, {
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(equipamento)
    })
    .then(res => res.json())
    .then(dados=>{
        resposta.innerHTML = `<p>${dados.message}</p>`
        document.querySelector('form')
    })


})


.catch(err =>{
    console.error('Erro ao cadastrar equipamento!', err)
    resposta.innerHTML = `<p>Erro ao cadastrar equipamento!</p>`

})