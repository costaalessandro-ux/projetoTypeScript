let anyEstaDeVolta: any;
anyEstaDeVolta = 2;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta

// tipo unknown
let unknowValor: unknown
unknowValor = 3
unknowValor = 'opa'
unknowValor = true
unknowValor = 'vai sim'

let stringTest2: string = 'agira vai'
//stringTest2 = unknowValor
if(typeof unknowValor === 'string'){
    stringTest2 = unknowValor
}

// comando throw + tipo never
function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}
jogaErro('deu erro', 500)