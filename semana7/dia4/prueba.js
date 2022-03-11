import format from "date-format"

const fechaActual = new Date()
const fechaFormateada = format.asString(fechaActual)
const fechaOtroFormato =format.asString("dd-MM-yyyy",fechaActual)

console.log(fechaFormateada)
console.log(fechaOtroFormato)