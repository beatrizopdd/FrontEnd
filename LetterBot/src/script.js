let leitorA = new FileReader();
let leitorB = new FileReader();

function abrirArquivo(campo) {
	
	if (campo.id == 1)
		leitorA.readAsText(campo.files[0]);
	
	else 
		leitorB.readAsText(campo.files[0]);
}

function analisar(tipo) {
	
	/* extração dos nomes de usuário */
	var usuarios = extrairUsuarios();
	
	/* extração dos filmes */
	var filmes = extrairFilmes(tipo);
	
	/* construção da mensagem que será impressa */
	var mensagem = criaMensagem(tipo, usuarios, filmes);
	
	imprimir(mensagem);
	
	
}

function extrairUsuarios() {
	var userNameInput = document.getElementsByName("userName");
	var userA = "<span>Desconhecido</span>";
	var userB = "<span>Desconhecido</span>";
	
	if (userNameInput[0].value != [])
		userA = "<span>" + userNameInput[0].value + "</span>";
	if (userNameInput[1] != undefined && userNameInput[1].value != [])
		userB = "<span>" + userNameInput[1].value + "</span>";
	
	return [userA, userB];
}

function extrairFilmes(tipo) {
	
	if (leitorA.readyState == 0 ||(tipo != 2 && leitorB.readyState == 0))
		return ["FALTAFILME"];
	
	if (tipo == 2 && document.getElementById("data").value == "")
		return ["FALTADATA"];
	

	if (tipo == 1) {
		var filmesA = extrairW(leitorA.result.split("\r\n"));
		var filmesB = extrairW(leitorB.result.split("\r\n"));
		return compararW(filmesA, filmesB);
	}
	
	if (tipo == 2)
		return compararD(leitorA.result.split("\r\n"));
	
	var filmesA = extrairR(leitorA.result.split("https://boxd.it/"));
	var filmesB = extrairR(leitorB.result.split("https://boxd.it/"));
	return compararR(filmesA, filmesB);
	
	
}

function criaMensagem(tipo, usuario, filmes) {
	
	if (filmes == "FALTAFILME")
		return ["Não foi possível fazer a comparação, falta um arquivo!"];
	
	if (filmes == "FALTADATA")
		return ["Não foi possível fazer a comparação, falta a data!"];
	
	var mensagem;
	
	if (tipo == 1) {
		mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " filmes em comum:<br>";
	
	} else if (tipo == 2) {
		var dataVet = document.getElementById("data").value.split("-");
		var data = dataVet[2] + "/" + dataVet[1] + "/" + dataVet[0];
		mensagem = "No dia " + data + ", " + usuario[0] + " assistiu " + filmes.length + " filmes:<br>";
		
	} else if (tipo == 3) {
		mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " avaliações em comum:<br>"; 
	}
	
	return [mensagem, filmes.join("<br>")];
}

function imprimir(resultado) {
	var texto = document.getElementById("texto");
	texto.innerHTML = resultado.join("<br>");
}

function extrairW(lista) {
	
	var filmes = [];
	
	for (var i = 1; i < lista.length; i++) {
		var filme = lista[i].split(",");
		filme.shift(); //tira a data em que foi logado
		filme.pop(); //tira o link do filme
		filmes[i-1] = filme.join(", ");
	}
		
	return filmes;
}

function compararW(filmesA, filmesB) {
	
	var menor = [];
	var maior = [];
	
	if (filmesA.length < filmesB.length) {
		menor = filmesA;
		maior = filmesB;
	} else {
		menor = filmesB;
		maior = filmesA;
	}
	
	var filmes = [];
	var i = 0;
		
	for (var j = 0; j < menor.length; j++) {
		if (maior.includes(menor[j])) {
			filmes[i++] = menor[j];
		}
	}
	
	return filmes;
}

function compararD(lista) {
	
	var filmes = [];
	var i = 0;
	var data =  document.getElementById("data").value;
	
	for (var j = 1; j < lista.length; j++) {
		var filme = lista[j].split(",");
		if (filme[7] == data)
			filmes[i++] = filme[1] + "," + filme[2];
	}
		
	return filmes;
}

function extrairR(lista) {
	
	var filmes = [];

	console.log(lista);
	for (var i = 1; i < lista.length; i++) {
		var filme = lista[i].split(",");
		filmes[i-1] = filme[1] + "," + filme[2] + " - " + filme[4] + " ★";
	}
	
	return filmes;
}

function compararR(filmesA, filmesB) {
	
	var menor = [];
	var maior = [];
	
	if (filmesA.length < filmesB.length) {
		menor = filmesA;
		maior = filmesB;
	} else {
		menor = filmesB;
		maior = filmesA;
	}
	
	var filmes = [];
	var i = 0;
		
	for (var j = 0; j < menor.length; j++) {
		if (maior.includes(menor[j])) {
			filmes[i++] = menor[j];
		}
	}
	
	return filmes;
}