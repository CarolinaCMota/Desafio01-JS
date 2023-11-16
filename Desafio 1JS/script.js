


alert("Iremos fazer operrações matemáticas!")
let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber





alert('A soma dos número é: ' + sum)
alert('A subtração dos número é: ' + sub)
alert('A multiplicação dos número é: ' + multi)
alert('A divisão dos número é: ' + div)
alert('O resto da divisão é: ' + restDiv)


function verificarParOuImpar(sum) {
    if (sum % 2 === 0) {
       
        alert('A soma dos dois números é par')
    } else {
      
        alert('A soma dos dois números é impar')
    }
}
verificarParOuImpar(sum)

function verificarIgualdade(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
        alert("Os números são iguais.");
    } else {
        alert("Os números são diferentes.");
    }
}

verificarIgualdade(firstNumber, secondNumber)

