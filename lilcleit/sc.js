let nomeSerie = document.querySelector("#nomeSerie");
let posterSerie = document.querySelector("#posterSerie");
let generoSerie = document.querySelector("#generoSerie");
let fotosAtores = document.querySelector("#fotosAtores");
let posterTemp1 = document.querySelector("#posterTemp1");
let posterTemp2 = document.querySelector("#posterTemp2");
let posterTemp3 = document.querySelector("#posterTemp3");
let nomeEp = document.querySelector("#nomeEp");

nomeSerie.innerHTML = bd.nome;
posterSerie.innerHTML = "<img src='" + bd.fotoPoster + "'>";
generoSerie.innerHTML = bd.generos;
fotosAtores.innerHTML = "<img src='" + bd.elenco[1].foto + "'>";
posterTemp1.innerHTML = "<img src='" + bd.temporadas[0].poster + "'>" + " <br> Número de Episódios: " + bd.temporadas[0].numero_episodios;
posterTemp2.innerHTML = "<img src='" + bd.temporadas[1].poster + "'>" + " <br> Número de Episódios: " + bd.temporadas[1].numero_episodios;
posterTemp3.innerHTML = "<img src='" + bd.temporadas[2].poster + "'>" + " <br> Número de Episódios: " + bd.temporadas[2].numero_episodios;
nomeEp.innerHTML =  "Primeiro Episódio da temporada <br>" + bd.temporadas[1].episodios[0].nome;



// • Liste o nome de cada um dos episódios da segunda temporada




//15 atores

