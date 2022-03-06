const ULR_SW_IMAGES = "https://akabab.github.io/starwars-api/api/all.json";

const containerElements = document.querySelector("#container-elements");

const obtenerData = async () => {
  const reponse = await fetch("https://swapi.dev/api/people");
  const data = await reponse.json();

  //console.log(data.results)
  renderData(data.results);
}

const renderData = (data) => {
    //console.log("aquiiiiii",data)
    data.map((character) => {
        
      let imageActor = getImageFromStarWars(character.name)
      console.log("miac",imageActor)
 
      const html = `
        <div class="col-md-4 mb-5">
            <div class="card-body">
                <h1 class="title">${character.name}</h1>
                <div class="text-center"> 
                      <img id="actor-image" class="actor-image" width="200" src="https://codigo.edu.pe/public/img/desarrollo-movil-fluter.jpg" alt=""/>
                </div>
            </div>
        </div>
      `
  
        console.log("aqui", character.name)
        containerElements.innerHTML += html
    })
}

const getImageFromStarWars = async (nombreActor) => {
    const response = await fetch(ULR_SW_IMAGES);
    const imagenes = await response.json();
  
      const resultado = imagenes.find((imagen) => imagen.name === nombreActor)
      console.log("aqui",resultado)
      return resultado.image
   
  
    //console.log("aqui",actors);
  };



obtenerData()