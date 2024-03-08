console.log()

function sortear(){
    const quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    const numeroInicial = parseInt(document.getElementById('de').value);
    const numeroFinal = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];
    let numero;

    if(!validaCampos(numeroInicial, numeroFinal, quantidadeNumeros)) return false;

    numero = geraNumeroAleatorio(numeroInicial, numeroFinal);

    for(i=0;i<quantidadeNumeros;i++){
        while(numerosSorteados.includes(numero)){
            numero = geraNumeroAleatorio(numeroInicial, numeroFinal);
        }

        numerosSorteados.push(numero);
    }

    document.getElementById('numerosSorteados').innerHTML = numerosSorteados;

    alterarStatusBotao()
}

function alterarStatusBotao(){
    const botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
    
}

function validaCampos(de, ate, quantidade){
    const intervalo = (ate - de) + 1

    if(ate <= de){
        alert('O campo "De número" deve ser maior que o campo "Até o numero"');
        return false;
    }
    if((intervalo) < quantidade){
        alert('O intervalo entre de e até deve ser maior do que a quantidade de números informada');
        return false;
    }
    return true;
}

function geraNumeroAleatorio(de, ate){
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('numerosSorteados').innerHTML = 'nenhum até agora';

    alterarStatusBotao();
}
