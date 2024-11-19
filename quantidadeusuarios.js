async function quantidadeusuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resposta = await fetch (url)
    const dados = await resposta.json()
    const nomedasredes = Object.keys(dados)
    const numerodeusuarios = Object.values(dados)

    const data = [
        {
            x:nomedasredes,
            y:numerodeusuarios,
            type:'bar'
        }
    ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data)
}

quantidadeusuarios()
