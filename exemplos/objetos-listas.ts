const pessoa1 = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa1.idade = 29

const pessoa2: {nome: string, idade: number, profissao:string} = {
   nome: 'Andre',
   idade: 27,
   profissao: "Pintor"
}

const pessoa3: {nome: string, idade: number, profissao:string} = {
   nome: 'Mariana',
   idade: 30,
   profissao: "Desenvolvedora"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Estudadente extends Pessoa{
    materias: string[]
}

interface Pessoa{
    nome: String,
    idade: number,
    profissao?: Profissao
}

const pessoa4 : Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const pessoa5 : Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const pessoa6: Estudadente = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica','Programação']
}

const pessoa7: Estudadente = {
    nome: 'Mônica',
    idade: 28,
    materias: ['marketing','Programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item)
    }
}

listar(pessoa6.materias)