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


PERSONALES.forEach(persona => {
    const col = document.createElement('div');
    col.classList.add('col-sm-12', 'col-md-6', 'col-lg-3');
    col.innerHTML = `
                            <div class="cobertura2">
                             <div class="particulares wrapper bg-surface-on-primary rounded-10px">
                               <img  class="image-card" src="../image/seguros_home_lg (1).png" alt="">
                               <h4>${persona.nombre}</h4>
                             </div>
                            </div>    
    `
    rendercards_personas.appendChild(col);
});











