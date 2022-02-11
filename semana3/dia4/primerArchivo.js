//alert('Hola Mundo');
const numero1=10
const numero2=20

let resultado=0
let nombre='Patricia'

nombre='Patricia'
resultado=numero1+numero2

console.log("Resultado")
console.log(resultado)

console.log("Resultado: " + numero1 + " + " + numero2 + " = " + resultado)

console.log("Resultado:", resultado)

console.log("Mi nombre:", nombre)

console.error("Suma Error:", resultado)

console.error("Diferencia Error:", numero1)

console.error("Error de resultado:",numero2)

console.warn("Resultado:",resultado)

//const valor=prompt("Ingrese un valor")
//console.log("Valor:",valor)

//calculador
const valor1=prompt("Ingrese un valor1")
const valor2=prompt("Ingrese un valor2")

const operacion=prompt("Ingrese tipo operacion")

let resultadoCalculadora = 0

//para poder hacer los calculos debo convertir mi variables de string a number
if (operacion ==="+") {
    resultadoCalculadora= +valor1 + +valor2
    console.log("Resulta calculado:",resultadoCalculadora)
} else if (operacion ==="-") {
    resultadoCalculadora= +valor1 - +valor2
    console.log("Resulta calculado:",resultadoCalculadora)
} else if (operacion ==="*") {
    resultadoCalculadora= +valor1 * +valor2
    console.log("Resulta calculado:",resultadoCalculadora)
} else if (operacion ==="/") {
    if (+valor2 !== 0) {
        resultadoCalculadora= +valor1 / +valor2
        console.log("Resulta calculado:",resultadoCalculadora)

    }else {
        console.warn("El divisor debe ser distinto a 0")

    }

} else {
    console.error("Operacion no valida")
}


