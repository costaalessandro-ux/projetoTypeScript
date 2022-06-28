let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Ola ', valorString2);
//# sourceMappingURL=any.js.map