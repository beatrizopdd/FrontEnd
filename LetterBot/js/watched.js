function analisar() {
	
	/* extração dos nomes de usuário */
	var userNames = extrairUserNames();
	
	/* extração dos filmes */
	var filmes = extrairWatched();
	
	/* constroi a mensagem que será impressa */
	var resultado = criarMensagem(userNames, filmes);
	
	imprimir(resultado);
	
}

function imprimir(resultado) {
	var texto = document.getElementById("resultado");
	texto.innerHTML = resultado.join("<br>");
}

function criarMensagem(usuario, filmes) {
	if (filmes == "ERRO")
		return ["Não foi possível fazer a comparação, verifique os arquivos!"];

	var mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " filmes em comum";
	return [mensagem, filmes];
}

function extrairUserNames() {
	var userNameInput = document.getElementsByName("userName");
	var user1 = "<span>Desconhecido</span>";
	var user2 = "<span>Desconhecido</span>";
	
	if (userNameInput[0].value != [])
		user1 = "<span>" + userNameInput[0].value + "</span>";
	if (userNameInput[1].value != [])
		user2 = "<span>" + userNameInput[1].value + "</span>";
	
	return [user1, user2];
}

function extrairWatched() {
	var input = document.getElementsByName("userFile");
	
	/* extração dos filmes */
	var filmes1 = extrairFilmes(input[0]);
	var filmes2 = extrairFilmes(input[1]);
	
	/* comparação das listas*/
	var filmes = compararFilmes(filmes1, filmes2);
	
	return filmes;
}

function extrairFilmes(input) {
	
	if (input.files[0] == null)
		return "Arquivo inválido";
	
	var leitor = new FileReaderSync();
	leitor.readAsText(input.files[0]);
	
	var conteudo = leitor.result;

    return conteudo;
}

function compararFilmes(filmes1, filmes2) {
	
	if (filmes1 == "Arquivo inválido" || filmes2 == "Arquivo inválido")
		return "ERRO";
	
	return filmes1 + " e " + filmes2;
}

/*
public class Affinity {

    public static ArrayList<String> extrai(String nomeArquivo) throws FileNotFoundException, IOException {
        ArrayList<String> filmes = new ArrayList();
        
        FileReader arquivo = new FileReader(nomeArquivo);
        BufferedReader leitor = new BufferedReader(arquivo);
        
        String linha = leitor.readLine();
        while (linha != null) {
            String filme = leFilme(linha);
            if (!filmes.contains(filme))
                filmes.add(filme);
            linha = leitor.readLine();
        }
        
        // remove cabeçalho
        filmes.remove(0);
        
        leitor.close();
        
        return filmes;
    }
    
    public static String leFilme(String linha) {
        String[] particulas = linha.split(",");
        
        // data
        particulas[0] = "NULLNULLNULL"; 
        // url
        particulas[particulas.length - 1] = "NULLNULLNULL";
        
        String[] nomeAno = new String[particulas.length-2];
        int i = 0;
        for (String particula: particulas) {
            if (!particula.equals("NULLNULLNULL"))
                nomeAno[i++] = particula;
        }
        
        String filme = Arrays.toString(nomeAno);
        
        return filme;
    }
    
    public static ArrayList<String> compara(ArrayList<String> usuario1, ArrayList<String> usuario2) {
        ArrayList<String> emComum = new ArrayList();
        ArrayList<String> menor;
        ArrayList<String> maior;
        
        if (usuario1.size() < usuario2.size()) {
            menor = usuario1;
            maior = usuario2;
        } else {
            menor = usuario2;
            maior = usuario1;
        }
        
        for (String filme: menor) {
            if (maior.contains(filme))
                emComum.add(filme);
        }
        
        return emComum;
    }
}
*/