const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(math.random() * 100);
}

console.log('Número Secreto: ', numeroSecreto);
