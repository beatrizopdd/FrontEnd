let curriculo = [["GMA00019", "", 0], ["GGM00127", "", 0], ["TCC00308", "", 0], ["TCC00346", "", 0], ["TCC00296", "", 0], ["GMA00021", "GMA00019", 1], ["GMA00022", "GGM00127 GMA00019", 2], ["GAN00167", "", 0], ["TCC00347", "TCC00308", 1], ["TCC00301", "TCC00308", 1], ["TET00347", "TCC00296", 1], ["GET00122", "GMA00021", 1], ["GFI00158", "GMA00019", 1], ["GFI00161", "", 0], ["GAN00140", "GGM00127", 1], ["TCC00348", "TCC00347", 1], ["TCC00328", "TCC00347", 1], ["TCC00286", "TET00347", 1], ["TCC00349", "GET00122", 1], ["GAN00166", "GAN00167", 1], ["TCC00287", "TCC00348", 1], ["TCC00300", "TCC00328", 1], ["TCC00292", "TCC00328", 1], ["TCC00316", "TCC00286", 1], ["TCC00306", "GMA00019", 1], ["TCC00285", "GAN00167 TCC00348", 2], ["TCC00304", "TCC00347 GAN00166", 2], ["TCC00288", "TCC00287", 1], ["TCC00226", "TCC00328 TCC00287", 2], ["TCC00312", "TCC00292", 1], ["TCC00313", "TCC00316", 1], ["TCC00307", "GMA00021 GMA00022 TCC00306", 3], ["TCC00284", "TCC00285", 1], ["TCC00305", "GAN00166", 1], ["TCC00291", "GAN00140 TCC00348", 2], ["TCC00293", "TCC00292", 1], ["TCC00314", "TCC00313", 1], ["TCC00318", "TCC00347 GAN00140", 2], ["TCC00289", "TCC00348 TCC00304 TCC00305", 3], ["TCC00297", "TCC00348 GAN00166", 2], ["TCC00298", "TCC00292", 1], ["TCC00344", "TCC00348 TCC00316", 2], ["TCC00315", "TCC00316", 1], ["TCC00310", "GGM00127 GMA00019 TCC00296 TCC00308 GAN00167 GMA00021 GMA00022 TCC00347 GAN00166 TCC00287 TCC00292 TCC00316 TCC00349", 13], ["TCC00311", "TCC00310", 1], ["TCC00290", "", 0]];

function reseta() {
	window.location.reload(true);
}

function cursada(disciplina) {

	// foi cursada
	if (disciplina.checked)
		atualizaRequisitos(disciplina.id, -1);
	// não foi cursada (desmarcar o click)
	else	
		atualizaRequisitos(disciplina.id, 1);
	
	atualizaDisciplinas();
}

function atualizaRequisitos(codigo, modo) {
	for (var i = 0; i < curriculo.length; i++) {
		var requisitos = curriculo[i][1].split(" ");
		if ((requisitos.includes(codigo)) && ((modo == -1) || (modo == 1 && curriculo[i][2] != requisitos.length)))
			curriculo[i][2] = curriculo[i][2] + modo;
	}
}

function atualizaDisciplinas() {
	for (var i = 0; i < curriculo.length; i++) {
		
		var disciplina = document.getElementById(curriculo[i][0]);
		
		// cursada
		if (disciplina.checked) {
			disciplina.nextSibling.style.color = "#03A688";
		
		// pode cursar
		} else if (curriculo[i][2] == 0) {
			disciplina.nextSibling.style.color = "#D96704";
		
		// não pode cursar
		} else {
			disciplina.nextSibling.style.color = "black";
		}
			
	}
}