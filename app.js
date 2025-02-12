//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let friend = document.getElementById("amigo").value;
    if (friend == ""){
        alert("Por favor insira um nome valido!");
        return;
    }
    listaDeAmigos.push(friend);
    limparCampo();
    listarAmigo();
}

function limparCampo(){
    let campo = document.getElementById("amigo");
    campo.value = "";
}

function listarAmigo(){
    let consultaNome = document.getElementById("listaAmigos");
    
    let li = document.createElement("li");
    li.textContent = listaDeAmigos.at(listaDeAmigos.length - 1);
    consultaNome.append(li);
}