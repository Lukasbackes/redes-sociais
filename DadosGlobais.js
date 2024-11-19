const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'



async function vizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    const PessoasMundo = ((dados.total_pessoas_mundo)/1e9).toFixed(2)
    const PessoasConectadas = ((dados.total_pessoas_conectadas)/1e9).toFixed(2)
    const Horas = parseInt(dados.tempo_medio)
    const Minutos = Math.round((dados.tempo_medio - Horas)*100)
    const Porcentagem = ((PessoasConectadas/PessoasMundo)*100).toFixed(2) 




    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = ` Você sabia que o mundo tem 
    <span> ${PessoasMundo} bilhões</span>  de pessoas e que aproximadamente
    <span>${PessoasConectadas} bilhões </span> estão conectadas em
     alguma rede social e passam em média <span> ${Horas} </span>
     horas e <span> ${Minutos} </span> minutos conectadas
     <br> Isto é impressionante pois cerca de <span> ${Porcentagem}% </span> 
     de pessoas no mundo utilizam alguma rede social. 
     `

     const container = document.getElementById('graficos-container');
     container.appendChild(paragrafo);

    
}

vizualizarInformacoesGlobais()