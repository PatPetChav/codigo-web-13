const btnPrueba = document.querySelector("#btn-prueba")
const btnPregunta = document.querySelector("#btn-pregunta")
const btnError = document.querySelector("#btn-error")
const btnWarning = document.querySelector("#btn-warning")
const btnSuccess = document.querySelector("#btn-success")
const btnInfo = document.querySelector("#btn-info")
const btnImage = document.querySelector("#btn-image")


function showAlert(icon,title,text) {
    swal.fire ({
        icon,
        title,
        text
    })
}





btnPrueba.onclick =  function(event) {
    console.log("click desde el boton")

  Swal.fire("Hola mundo")
  
}

btnPregunta.onclick =  function() {
      /* Swal.fire(
        'PREGUNTA?',
        'Alguna pregunta?',
        'question'
      )*/

      Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
}

btnError.onclick =  function() {

    showAlert('error','Hubo un error','Email o Password erroneos!')

    /*Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Email o Password erroneos!',
        footer: '<a href="">Why do I have this issue?</a>'
      })*/
}

btnWarning.onclick =  function() {
    Swal.fire({
        icon: 'warning',
        title: 'Hay una alerta de peligro',
        text: 'El peligro se acerca!'        
      })  
}

btnSuccess.onclick =  function() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Todo salio bien',
        showConfirmButton: false,
        timer: 1500
      })
}

btnInfo.onclick =  function() {
    Swal.fire({
        icon: 'info',
        title: 'Informacion',
        text: 'Mensaje informativo de mi alerta'        
      })
}

btnImage.onclick =  function() {
    Swal.fire({
        imageUrl: 'https://us.123rf.com/450wm/yupiramos/yupiramos1803/yupiramos180308132/96859585-hermosa-flor-gui%C3%B1o-ilustraci%C3%B3n-vectorial-de-dibujos-animados.jpg',
        imageHeight: 500,
        imageAlt: 'A tall image'
      })
  
}





const paises =document.querySelector("#select-opciones")

paises.onchange = function (event) {
    //console.log("Probamos el evento onchange")

    const { value, options} = event.target

    //console.log("valor de evento", event.target.value)
    console.log("valor de evento", value)

    //const index = event.target.options.selectedIndex
    const index = options.selectedIndex

    console.log("index",index)

    //console.log("texto",event.target.options[index].text)
    console.log("texto",options[index].text)
}

/* con el profesor*/

/*//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* mas legible
const btnPrueba = document.querySelector("#btn-prueba");

function showAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    footer: "<a href='https://google.com'>Link de footer</a>",
  });
}

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
  Swal.fire("Hola mundo");
};

const btnPregunta = document.querySelector("#btn-pregunta");

btnPregunta.onclick = function () {
  Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
};

const btnError = document.querySelector("#btn-error");

btnError.onclick = function () {
  showAlert("error", "Hubo un error", "Email or Password erroneos");
};

const btnWarning = document.querySelector("#btn-warning");
btnWarning.onclick = function () {
  showAlert("warning", "Hay una alerta de peligro", "El peligro se acerca");
};

const btnSuccess = document.querySelector("#btn-success");
btnSuccess.onclick = function () {
  showAlert("success", "Todo ok", "Todo salio bien");
};

const btnInfo = document.querySelector("#btn-info");
btnInfo.onclick = function () {
  showAlert("info", "Informacion", "Mensaje informativo de mi alerta");
};*/