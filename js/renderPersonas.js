console.log('renderPersonales.js loaded');

const PERSONALES = [
    {
        id: 1,
        nombre: 'ACCIDENTES PERSONALES',
    },
    {
        id: 2,
        nombre: 'VIDA',
    },
    {
        id: 3,
        nombre: 'AHORROS',
    },
    {
        id: 4,
        nombre: 'INVERSIONES',
    },
    

];




const rendercards_personas = document.querySelector('#seguros_personas');


rendercards_personas.innerHTML = PERSONALES.map(particular => {
    return (`
    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="cobertura2">
                             <div class="particulares wrapper rounded">
                               <img  class="image-card" src="../image/seguros_home_lg (1).png" alt="">
                               <h4>${particular.nombre}</h4>
                             </div>
                            </div>    
                     </div>
    `)
})
   



