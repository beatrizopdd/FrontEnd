let numeros = [0];
let bichos = ["Avestruz", "Águia", "Burro", "Borboleta", "Cachorro", "Cabra", "Carneiro", "Camelo", "Cobra", "Coelho", "Cavalo", "Elefante", "Galo", "Gato", "Jacaré", "Leão", "Macaco", "Porco", "Pavão", "Peru", "Touro", "Tigre", "Urso", "Veado", "Vaca"];

function add(numero) {
	var display = document.getElementsByClassName("display");
	
	if (numeros[0] != 0)
		numeros.push(numero);
	else
		numeros[0] = numero;
	
	display[0].innerText = numeros.join("");
}

function del() {
	var display = document.getElementsByClassName("display");
	
	if (numeros.length > 1)
		numeros.pop();
	else
		numeros[0] = 0;
	
	display[0].innerText = numeros.join("");
}

function send() {
	var numero = parseInt(numeros.join(""));
	if (numero == 0)
		numero = 100;

	var grupo = parseInt((numero - 1) / 4);
	
	var bicho;
	if (grupo >= 0 && grupo <= 24)
		bicho = bichos[grupo];
	else 
		bicho = "Inválido";
	
	print(bicho);
}

function print(bicho) {
	var display = document.getElementsByClassName("display");
	display[0].innerText = bicho;
	numeros = [0];
}