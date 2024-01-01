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

function extrairFilmes(tipo) {
	return watched.extrairWatched();
}

function criarMensagem(tipo, usuario, filmes) {
	
	var mensagem;
	
	if (tipo == "Assistidos") {
		mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " filmes em comum";
	
	} else if (tipo == "Avaliados") {
		mensagem = usuario[0] + " e " + usuario[1] + " tem " + filmes.length + " avaliações em comum";
	
	} else if (tipo == "Ver data") {
		/* pegar a data */
		data = "indefinida";
		mensagem = "No dia " + data + " " + usuario[0] + " assistiu " + filmes.length + " filmes";
	}
	
	return mensagem;
}

function analisar(tipo) {
	
	/* extração dos nomes de usuário */
	var userNames = extrairUserNames();
	
	/* extração dos filmes */
	var filmes = extrairFilmes(tipo);
	
	/* constroi a mensagem que será impressa */
	var mensagem = criarMensagem(tipo, userNames, filmes);
	
	var resultado = [mensagem, filmes.join("<br>")];
	
	imprimir(resultado);
	
	
}

function imprimir(resultado) {
	var texto = document.getElementById("resultado");
	texto.innerHTML = resultado.join("<br>");
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

public class SaveTheDate {

    public static ArrayList<String[]> extrai(String nomeArquivo) throws FileNotFoundException, IOException {
        
        ArrayList<String[]> filmes = new ArrayList();
        
        FileReader arquivo = new FileReader(nomeArquivo);
        BufferedReader leitor = new BufferedReader(arquivo);
        
        String linha = leitor.readLine();
        while (linha != null) {
            String[] filme = leFilme(linha);
            filmes.add(filme);
            linha = leitor.readLine();
        }
        
        // remove cabeçalho
        filmes.remove(0);
        
        leitor.close();
        
        return filmes;
    }
    
    public static String[] leFilme(String linha) {
        
        String[] filme = new String[2];
        
        String[] particulas = linha.split(",");
        
        // data
        filme[0] = particulas[0];
        particulas[0] = "NULLNULLNULL";
        
        // ano 
        particulas[particulas.length - 2] = "NULLNULLNULL";
        
        // url
        particulas[particulas.length - 1] = "NULLNULLNULL";
        
        String[] nome = new String[particulas.length-3];
        int i = 0;
        for (String particula: particulas) {
            if (!particula.equals("NULLNULLNULL"))
                nome[i++] = particula;
        }
        
        filme[1] = Arrays.toString(nome);
        
        return filme;
    }
    
    public static ArrayList<String> compara(String data, ArrayList<String[]> usuario) {

        ArrayList<String> noDia = new ArrayList();
                
        for (String[] filme: usuario) {
            if (filme[0].equals(data))
                noDia.add(filme[1]);
        }
        
        return noDia;
    }
}
*/