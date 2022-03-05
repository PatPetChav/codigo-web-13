const persona = {
    nombre:"Juan",
    apellido:"Perez",
    direccion: "Av siempre viva 123",
    telefono: "9454554",
    edad:33,

}

//obtener nombre, edad con desctructuracion1
const{nombre, edad} = persona
console.log(nombre,edad)

//obtener telefono, edad, apellido con desctructuracion
const{telefono,  apellido} =  persona
console.log(telefono)
console.log(edad)
console.log(apellido)