let nomeSerie = document.querySelector("#nomeSerie");
let resumo = document.querySelector("#resumo")
let nota = document.querySelector("#nota")
let posterss = document.querySelector("#posterss");
let generoSerie = document.querySelector("#generoSerie");
let fotosAtores = document.querySelector("#fotosAtores");
let posterTemp1 = document.querySelector("#posterTemp1");
let posterTemp2 = document.querySelector("#posterTemp2");
let posterTemp3 = document.querySelector("#posterTemp3");
let nomeEp = document.querySelector("#nomeEp");

nomeSerie.innerHTML = "Título da série: " + bd.nome;
resumo.innerHTML = "Resumo da Série: " + bd.resumo;
nota.innerHTML = "Nota da Série: " + bd.nota
posterSerie.innerHTML = "<img src='" + bd.fotoPoster + "'>";
generoSerie.innerHTML = bd.generos;

for (let i = 0; i < bd.elenco.length; i++) {
    fotosAtores.innerHTML += "<img src='" + bd.elenco[i].foto + "'>";
    
}

for (let b = 0; b < bd.temporadas.length; b++) {
    posterss.innerHTML += "<br> <br> <br> <img src='" + bd.temporadas[b].poster + "'>" + " <br> Numero de Episódios: "  + bd.temporadas[b].numero_episodios;
    
}

for (let a = 0; a < bd.temporadas[1].episodios[a].nome.length; a++) {
    nomeEp.innerHTML += " <br> Nome do episódio da Segunda Temporada: " + bd.temporadas[1] .episodios[a].nome + "<br>";
    
}


// nomeEp.innerHTML =  "Primeiro Episódio da temporada <br>" + bd.temporadas[1].episodios[0].nome;
