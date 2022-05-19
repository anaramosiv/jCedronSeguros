console.log('renderPersonales.js loaded');

const PERSONALES = [
    {
        id: 1,
        nombre: 'ACCIDENTES PERSONALES',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 2,
        nombre: 'VIDA',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 3,
        nombre: 'AHORROS',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 4,
        nombre: 'INVERSIONES',
        image: '../image/seguros_home_lg.png',
    },
    {
        id: 5,
        nombre: 'MASCOTAS',
        image: '../image/seguros_home_lg.png',
    },

];




const rendercards_personas = document.querySelector('#seguros_personas');


PERSONALES.forEach(persona => {
    const col = document.createElement('div');
    col.classList.add('col-sm-12', 'col-md-6', 'col-lg-3');
    col.innerHTML = `
                            <div class="cobertura2">
                             <div class="particulares wrapper bg-surface-on-primary rounded-10px">
                               <img  img  class="image-card" src=${persona.image} alt=${persona.nombre}>
                               <h4>${persona.nombre}</h4>
                             </div>
                            </div>    
    `
    rendercards_personas.appendChild(col);
});











