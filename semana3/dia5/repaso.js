// quiero arreglo de 10 personas
/*const misPersonas = ["ana","maria","jose","paul","ruben","lia","carlos","oto","rosa","julia"]

console.log(misPersonas.length)

personas1[6]="juanito"*/


const misvalores = ["ana",100,true,3.5,"ruben"]

 function obtenerElSegundoValor (arreglo) {
     /*validar si la posicion exite*/
     
    return arreglo[1] === undefined
    ?"error:posicion no encontrada"
    : arreglo[1]
}
console.log(obtenerElSegundoValor(misvalores))

/**array vacio */
/*funcion que se encarga de llenar el array carros nuevo*/

let carrosNuevos =[]
const llenarCarrosNuevos = (nuevoValor) => {
 carrosNuevos.push(nuevoValor)
}

llenarCarrosNuevos("Mercedes")
llenarCarrosNuevos("Tico")
llenarCarrosNuevos("Ford")
llenarCarrosNuevos("Tsla")

/*ste array seria un elemento de carros nuevos*/
llenarCarrosNuevos(["Tsla","BMN","xxx"])


console.log(carrosNuevos[4][1])

console.log(carrosNuevos)

/*funcion que me diga si un numero es par*/
const saberSiesParoImpar = (numero) => {
    /*forma1*/
    /*if (+numero % 2 ===0) {
        return "par"
    }
    return "impar"*/

    /*forma2*/
    return +numero % 2===0
    ? "par"
    : "impar"
} 

console.log(saberSiesParoImpar(10))
console.log(saberSiesParoImpar(7))



