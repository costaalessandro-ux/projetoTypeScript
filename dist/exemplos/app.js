let anyEstaDeVolta;
anyEstaDeVolta = 2;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
// tipo unknown
let unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';
let stringTest2 = 'agira vai';
//stringTest2 = unknowValor
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
// comando throw + tipo never
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
//# sourceMappingURL=app.js.map