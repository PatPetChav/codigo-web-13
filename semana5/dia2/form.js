
let nombres = []

function obtenerValoresDelInput(event) {
    //* event contiene muchos atributos del input
    //* los atributos mas importante que vamos a ver hoy el value y el name
    //? value = sera el contenido del input
    //? name = sera el nombre que le asigne a mi input
  
    //TODO: event es un objeto y la propiedada que contiene al value y al name se
    //TODO: llama "target"
    //! accediendo al value
    console.log(event.target.value)
    console.log(event.target.name)


    nombres.push(event.target.value)
    console.log(nombres)


  }
  


function validarCorreo(event) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //console.log(emailRegex.test(event.target.value))

    const emailError = document.querySelector("#email-error")

    if (!emailRegex.test(event.target.value)) {
        emailError.style.display="block"

    } else {
        emailError.style.display="none"
    }

}

function validarPassword(event) {
    const password = event.target.value.length

    const passwordError = document.querySelector("#password-error")

    if (password <=8) {
        passwordError.style.display="block"

    } else {
        passwordError.style.display="none"
    }

}

function validarTelefono(event) {
    const telefono = event.target.value.length

    const telefonoError = document.querySelector("#telefono-error")

    if (telefono <=9) {
        telefonoError.style.display="block"

    } else {
        telefonoError.style.display="none"
    }

}