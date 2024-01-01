function analisar() {
	
	/* extração dos nomes de usuário */
	var userName = extrairUserName();
	
	/* extração da data */
	var calendario = document.getElementById("data");
	var data = calendario.value;
	
	/* extração dos filmes */
	var filmes = extrairData();
	
	/* constroi a mensagem que será impressa */
	var mensagem = criarMensagem(userName, filmes, data);
	
	var resultado = [mensagem, filmes.join("<br>")];
	
	imprimir(resultado);
}

function criarMensagem(usuario, filmes, data) {
	
	var mensagem = "No dia " + data + ", " + usuario + " assistiu " + filmes.length + " filmes";
	
	return mensagem;
}

function imprimir(resultado) {
	var texto = document.getElementById("resultado");
	texto.innerHTML = resultado.join("<br>");
}

function extrairUserName() {
	var userNameInput = document.getElementsByName("userName");
	var user = "<span>Desconhecido</span>";
	
	if (userNameInput[0].value != [])
		user = "<span>" + userNameInput[0].value + "</span>";
	
	return user;
}

function extrairData() {
	return [4,5,6];
}

/*
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