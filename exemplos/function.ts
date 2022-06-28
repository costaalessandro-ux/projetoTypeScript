type input = number | string


function somaValores(input1: number | string, input2: number | string){
    if(typeof input1 === "string" || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }
}
console.log('typeof: ',somaValores(1, 5))
console.log('typeof: ',somaValores('ola', 'tudo bem ?'))
console.log('typeof: ',somaValores('1', 5))

// void não tem retorno
function printaValores(numero1: number, numero2: number): void{
    console.log(numero1 + numero2)
}

// incluindo callback em funções
function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number{
    let resultado = numero1 + numero2
    return callback(resultado)
}

function aoQuadrado(numero: number): number{
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero
}

console.log('callback: ',somarValoresNumericosETratar(1,3,aoQuadrado))
console.log('callback: ',somarValoresNumericosETratar(1,3,dividirPorEleMesmo))


