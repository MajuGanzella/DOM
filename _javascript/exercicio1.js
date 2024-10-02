
//mudando texto
function mudarTexto(){
  
    var p = document.getElementById("meuParagrafo");
    
p.textContent = "Mudadndo conteúdo do parágrafo.... Maria Julia Paes Ganzella"
}
//mostrando valores
function mostrarValor(){
            
    var input = document.getElementsByName("meuInput")[0];
    var resultado = document.getElementById("resultado");
    resultado.textContent = "valor é: " + input.value;
}
//Add parágrafos
function adicionarParagrafo(){
           
    var p = document.createElement("p");
    p.textContent = "Adicionando um novo parágrafo";
    document.body.appendChild(p);
}
//add texto
function adicionarTexto(){
    var text = document.createTextNode("Adicionando um novo texto!!");
    document.body.appendChild(text)

 }

// mudar a cor da página
function darkMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    
}
function lightMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
  
}
function purpleMode(){
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "purple-mode";
  
}