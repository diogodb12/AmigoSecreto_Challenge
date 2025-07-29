//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    novoSorteio();

    nomeCampo = document.querySelector('input').value;

    if(nomeCampo != ''){        
        amigos.push(nomeCampo);
        limparCampo();
    } else {
        alert('Campo vazio. Por favor, insira um nome.');
    }

    exibirLista();
}

function exibirLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(i = 0; i < amigos.length; i++){
        let itemLista = document.createElement('li');

        itemLista.textContent = amigos[i];

        listaAmigos.appendChild(itemLista);
    }
}


function sortearAmigo(){
    if (amigos.length >= 2){
        let indiceSorteado = parseInt(Math.random() * amigos.length);
        console.log(indiceSorteado);

        let nomeSorteado = document.getElementById('resultado');
        nomeSorteado = amigos[indiceSorteado];

        novoSorteio();

        let mensagemResultadoSorteio = document.getElementById('resultado');
        mensagemResultadoSorteio.innerHTML = `Nome sorteado: ${nomeSorteado}`;

        amigos = [];

    } else {
        alert('Lista vazia. Insira pelo menos 2 nomes:');
    }
}

function limparCampo(){
    nomeCampo = document.querySelector('input');
    nomeCampo.value = '';
}

function novoSorteio(){
    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    mensagemResultadoSorteio = document.getElementById('resultado');
    mensagemResultadoSorteio.innerHTML = '';
}