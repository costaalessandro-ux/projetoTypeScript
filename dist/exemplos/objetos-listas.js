const pessoa1 = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa1.idade = 29;
const pessoa2 = {
    nome: 'Andre',
    idade: 27,
    profissao: "Pintor"
};
const pessoa3 = {
    nome: 'Mariana',
    idade: 30,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const pessoa4 = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const pessoa5 = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const pessoa6 = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'Programação']
};
const pessoa7 = {
    nome: 'Mônica',
    idade: 28,
    materias: ['marketing', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(pessoa6.materias);
//# sourceMappingURL=objetos-listas.js.map