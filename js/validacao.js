 function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }
    if(numeroForMenorOuMaiorQueOValorPermitido(numero)) {
        console.log(`Valor inválido: o número secreto presisa estar entre ${menorValor} e ${maiorValor}.`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMenorOuMaiorQueOValorPermitido(numero) {
    return numero < menorValor || numero > maiorValor
}
