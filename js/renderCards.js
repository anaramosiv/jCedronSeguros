
console.log('renderCards.js loaded');


// OJO CON LOS NOMBRES DE LAS IMAGENES, LOS ESPACIOS HACEN CONVULSIONAR EL CODIGO
const PARTICULARES = [
    {
        id: 1,
        nombre: 'AUTOMOVILES',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 2,
        nombre: 'MOTOS',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 3,
        nombre: 'HOGARES',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 4,
        nombre: 'EMBARCACIONES',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 5,
        nombre: 'BICICLETAS',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 6,
        nombre: 'VIAJEROS',
        image: '../image/seguros_home_lg.png',
    },

];




const rendercards = document.querySelector('#seguros_particulares');


rendercards.innerHTML = PARTICULARES.map(particular => {
    return (`
    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="cobertura2">
                             <div class="particulares wrapper rounded">
                               <img  class="image-card" src=${particular.image} alt="">
                               <h4>${particular.nombre}</h4>
                             </div>
                            </div>    
                     </div>
    `)
})
   



