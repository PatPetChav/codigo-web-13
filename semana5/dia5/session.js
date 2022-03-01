const crearSession = document.querySelector("#crear-session")
const obtenerSession = document.querySelector("#obtener-session")
const eliminarSession = document.querySelector("#eliminar-session")

crearSession.onclick = function() {
//invocamos a session storage
    sessionStorage.setItem("variable_1","Mi primera variable en session storage")
}

obtenerSession.onclick = function() {
    const variable = sessionStorage.getItem("variable_1")
    console.log(variable)
}

eliminarSession.onclick = function() {
    sessionStorage.removeItem("variable_1")
}