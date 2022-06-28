function somaValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log('typeof: ', somaValores(1, 5));
console.log('typeof: ', somaValores('ola', 'tudo bem ?'));
console.log('typeof: ', somaValores('1', 5));
// void não tem retorno
function printaValores(numero1, numero2) {
    console.log(numero1 + numero2);
}
// incluindo callback em funções
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log('callback: ', somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log('callback: ', somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
//# sourceMappingURL=function.js.map