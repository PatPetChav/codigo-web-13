const ULR_SW = "https://akabab.github.io/starwars-api/api/all.json";

const containerElements = document.querySelector("#container-elements")
const tituloModal = document.querySelector("#modal-title")

const actorName = document.querySelector("#actor-name")
const bornLocation = document.querySelector("#born-location")
const specie = document.querySelector("#specie")
const hairColor = document.querySelector("#hair-color")
const eyeColor = document.querySelector("#eye-color")
const skinColor = document.querySelector("#skin-color")
const heightActor = document.querySelector("#height")
const mass = document.querySelector("#mass")
const wiki = document.querySelector("#wiki")

const obtenerData = async () => {
  const reponse = await fetch(ULR_SW);
  const data = await reponse.json();

  //console.log(data.results)
  renderData(data);
}

const renderData = (data) => {
    //console.log("aquiiiiii",data)
    data.map((actor) => {
     
      const html = `
        <div class="col-md-4 mb-5">
            <div class="card-body">
                <h1 >${actor.name}</h1>
                <div class="text-center"> 
                      <img id="actor-image" 
                      onclick='obtenerDetalleActor("${actor.name}")'
                      data-bs-toggle='modal' data-bs-target='#modalActor'
                      class="actor-image" src=${actor.image} alt=""/>
                </div>
            </div>
        </div>
      `
  
        //console.log("aqui", actor)
        containerElements.innerHTML += html
    })
}

const obtenerDetalleActor = async (nombreActor) => {
    //console.log("envia",nombreActor)
    const reponse = await fetch(ULR_SW);
    const data = await reponse.json();

    console.log("data",data)
    data.map((actor) => { 
        //console.log("el actor",actor.name) 
        if(actor.name === nombreActor) {
            tituloModal.innerHTML= "este es el titulo"
            actorName.innerHTML = actor.name
            bornLocation.innerHTML = actor.bornLocation
            specie.innerHTML = actor.specie
            hairColor.innerHTML = actor.hairColor
            eyeColor.innerHTML = actor.eyeColor
            skinColor.innerHTML = actor.skinColor
            heightActor.innerHTML = actor.heightActor
            mass.innerHTML = actor.mass
            wiki.innerHTML =  actor.wiki                      
            return
        }
    })
    
    /*const reponse = await fetch(ULR_SW);
    const data = await reponse.json();*/

    
  
  }

obtenerData()

