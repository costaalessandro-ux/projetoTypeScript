let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let botao = document.getElementById('button');
function adicionarNumeros(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
let devePrintar = true;
let frase = 'O resultado é: ';
botao.addEventListener("click", () => {
    adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase);
});
//# sourceMappingURL=exemplos-ts.js.map