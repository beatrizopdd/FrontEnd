function analisar(tipo) {
	
	/* extração dos nomes de usuário */
	var userNames = extrairUserNames();
	
	/* extração dos filmes */
	var filmes = extrairMatch();
	
	/* constroi a mensagem que será impressa */
	var mensagem = criarMensagem(userNames, filmes);
	
	var resultado = [mensagem, filmes.join("<br>")];
	
	imprimir(resultado);
}

function criarMensagem(usuario, filmes) {
	var mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " avaliações em comum";
	return mensagem;
}

function imprimir(resultado) {
	var texto = document.getElementById("resultado");
	texto.innerHTML = resultado.join("<br>");
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

function extrairMatch() {
	
}






/*
public class Match {

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
        
        // link
        particulas[particulas.length - 2] = "NULLNULLNULL";
        
        String[] nomeAnoAvaliacao = new String[particulas.length-2];
        int i = 0;
        for (String particula: particulas)
            if (!particula.equals("NULLNULLNULL"))
                nomeAnoAvaliacao[i++] = particula;
        
        String filme = Arrays.toString(nomeAnoAvaliacao);
        
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