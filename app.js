//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function limparCampo(){
    let campo = document.getElementById("amigo");
    campo.value = "";
}
//adiciona amigos ao array lista de amigos e limpa o campo logo em seguida.
function adicionarAmigo() {
    let friend = document.getElementById("amigo").value;
    if (friend == ""){
        return alert("Por favor insira um nome valido!");
    }
    listaDeAmigos.push(friend);
    limparCampo();
    listarAmigo();
}

//lista os amigos visualmente na tela.
function listarAmigo(){
    let consultaNome = document.getElementById("listaAmigos");
    
    let li = document.createElement("li");
    li.textContent = listaDeAmigos.at(listaDeAmigos.length - 1);
    consultaNome.append(li);
}

//puxa numero aleatorio.
function numeroAleatorio(len){
        return parseInt((Math.random() * len) + 1);
}

//sorteia o amigo aleatoriamente.
function sortearAmigo(){
    if (listaDeAmigos.length === 0){
        return alert("Adicione alguns amigos antes do sorteio");
    } else{
        let sorteio = numeroAleatorio(listaDeAmigos.length);
        let sorteado = document.getElementById("resultado");
        sorteado.innerHTML = listaDeAmigos.at(sorteio - 1);
    }
}

let listaDeAmigos = [];