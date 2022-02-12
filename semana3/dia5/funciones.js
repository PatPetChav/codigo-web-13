function nombreDelaFuncion() {
    console.log("mi primera funcion")
}

nombreDelaFuncion()

function sumar(numero1,numero2) {
    /*una forma*/
    /*let resultado =0
    resultado = numero1+numero2
    console.log("Resultado:",resultado)*/

    /*forma2*/
    /*const suma = +numero1 + +numero2
    console.log(suma)*/

    /*forma 3*/
    /*const convertNumero1 = +numero1
    const convertNumero2 = +numero2

    const suma = convertNumero1 + convertNumero2

    if (isNaN(suma)) {
        console.log("No puede")
        return
    }

    console.log("suma:",suma)*/

    /*forma4*/
    /* const convertNumero1 = +numero1
    const convertNumero2 = +numero2

    const suma = convertNumero1 + convertNumero2

    if (isNaN(suma)) {
        console.log("No puede")
        return "Error no puede"
    }
    return suma*/

    
    /*forma5*/
    const suma = +numero1 + +numero2
    return isNaN(suma)?"Error: no se puede sumar":suma

}

console.log(sumar(10,15))
console.log(sumar(100,115))
console.log(sumar(31.5,40.4))

console.log(sumar(10,"15"))
console.log(sumar(10,"Patricia"))


/*funcion anonima*/
const resta =function(numero1,numero2) {
    const calresta = +numero1 + +numero2
    return isNaN(calresta)?"Error: no se puede sumar":calresta
}
console.log("Resta",resta(10,20))

/*arrow function*/
const division = (numero1,numero2) => {
    if (+numero2===0) {
        return "error no se puede dividir por 0"
    }
    const caldiv = +numero1 / +numero2
    return isNaN(caldiv)?"Error: no se puede sumar":caldiv
}

console.log(division(10,0))

/*si solo tiene un parametro*/
const saludar = nombre => {
    return "hola " + nombre
}

console.log(saludar("Paty") )

/*si no tiene parametros*/
const funcionSinParametros = _ => {
    return "Hola"
   
}

console.log(funcionSinParametros())

/*arrow function inline*/
const hello=() => "Hola mundo en una linea"

console.log(hello())

/*recomendaciones */