
const btnImage = document.querySelector("#btn-image")

btnImage.onclick =  function() {
  Swal.fire({
      imageUrl: 'https://us.123rf.com/450wm/yupiramos/yupiramos1803/yupiramos180308132/96859585-hermosa-flor-gui%C3%B1o-ilustraci%C3%B3n-vectorial-de-dibujos-animados.jpg',
      imageHeight: 500,
      imageAlt: 'A tall image'
    })

}

/*const btnPrueba = document.querySelector("#btn-prueba")
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
}*/


/*btnPrueba.onclick =  function(event) {
    console.log("click desde el boton")

  Swal.fire("Hola mundo")
  
}*/

/*btnPregunta.onclick =  function() {
  Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
}*/

/*btnError.onclick =  function() {

  showAlert('error','Hubo un error','Email o Password erroneos!')

    
}*/

/*btnWarning.onclick =  function() {
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
  
}*/





/*const paises =document.querySelector("#select-opciones")

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
}*/


/*aqui lo del profesor*/

//* addEventListener
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
};

/*dia4*/
const btnAlertaBotones = document.querySelector("#btn-alerta-botones");
btnAlertaBotones.onclick = function () {
  Swal.fire({
    title: "Alerta",
    text: "Texto de alerta",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: "Nel pastel",
  }).then((resultado) => {
    console.log("resultado", resultado);
    if (resultado.isConfirmed) {
      console.log("marco la confirmacion");
    }

    if (resultado.isDenied) {
      console.log("marco que nel pastel");
    }
  });
};

const btnAlertNotification = document.querySelector("#btn-alerta-notificacion");
// 1000 => 1 segundo
btnAlertNotification.onclick = function () {
  Swal.fire({
    position: "top-end", // top, center, top-start, center-start, center-end, bottom, bottom-start, bottom-end
    icon: "success",
    title: "Notificacion",
    showConfirm: false,
    timer: 3000,
  });
};

const urlMarvel = "https://www.cinemascomics.com/wp-content/uploads/2022/02/villanos-marvel-comics-960x720.jpg"
const btnAlertaImagen  = document.querySelector("#btn-alerta-imagen")
btnAlertaImagen.onclick = function() {
  swal.fire({
    title: "imagen",
    text: "Alerta con imagen",
    imageUrl: `url(${urlmarvel})`,
    imageHeight: 300,
    imageWidth:300,
  })
}

const btnAlertaCustom = document.querySelector("#btn-alerta-custom")
btnAlertaCustom.onclick = function() {
  swal.fire({
    title: "imagen",
    text:"Alerta customisable",
    background: `url(${urlMarvel})`,
    backdrop: `
    rgba(0,0,0,0.3)
    url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)
    left top
    no-repeat`
  })
}


const btnalertaInputs = document.querySelector("#btn-alerta-inputs")
btnalertaInputs.onclick = function() {
  swal.fire({
    title: "input para email",
    input: "email",
    inputLabel: "Ingrese su correo",
    inputPlaceholder:"El correo debe ser válido",
  }).then((resultado) => {
    //obtengo el resultado de lo q escribio el usuario en el input
    console.log(resultado.value)
  })
}



/*dia3*/
const paises = document.querySelector("#select-opciones");

// onchange: Sirve para detectar si hay un cambio en mi elemento
paises.onchange = function (event) {
  // de evento quiero obtener el value y options
  const { value, options } = event.target;

  console.log("valor de event", value);
  const index = options.selectedIndex;
  console.log("index", index);
  console.log("texto", options[index].text);
};

// const usuario = {
//   nombre: "Pepe",
//   apellido: "Zapata",
//   edad: 30,
//   direccion: {
//     calle: "Calle falsa",
//     numero: "123",
//     ciudad: "Madrid",
//   },
// };

// // Estoy lo puedo descomponer en una variable
// // Estos es conocido como destructuracion de objetos
// const { nombre, apellido, edad, direccion } = usuario;
// console.log(nombre); // Pepe