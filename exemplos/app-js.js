
let num1 = document.getElementById('input1')
let num2 = document.getElementById('input2')
let button = document.getElementById('button')

function somaValores(num1, num2){
    return num1 + num2
}

button.addEventListener('click', () =>{
    console.log(somaValores(Number(input1.value), Number(input2.value)))
})
