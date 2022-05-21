console.log('renderEmpresas.js loaded');

const EMPRESARIALES = [
    {
        id: 1,
        nombre: 'INTEGRAL DE COMERCIO',
        image: '../image/integraldecomercio.png',
    },
    {
        id: 2,
        nombre: 'SEGURO TÉCNICO',
        image: '../image/segurotecnico_seg_lg.png',
    },
    {
        id: 3,
        nombre: 'ART',
        image: '../image/art_seg_lg.png',
    },
    {
        id: 4,
        nombre: 'FLOTA',
        image: '../image/flota_seg.png',
    },
    {
        id: 5,
        nombre: 'TRANSPORTE',
        image: '../image/transporte_seg.png',
    },
    {
        id: 6,
        nombre: 'RESPOSABILIDAD CIVIL',
        image: '../image/respcivil_seg.png',
    },
    {
        id: 7,
        nombre: 'GRANIZO',
        image: '../image/integraldecomercio.png',
    },

];




const rendercards_empresas = document.querySelector('#seguros_empresas');

EMPRESARIALES.forEach(seguro => {
    const col = document.createElement('div');
    col.classList.add('col-sm-12', 'col-md-6', 'col-lg-3');
    col.innerHTML = `
                            <div class="cobertura2">
                             <div class="particulares wrapper bg-surface rounded-10px">
                             <img  img  class="image-card" src=${seguro.image} alt=${seguro.nombre}>
                               <h4>${seguro.nombre}</h4>
                             </div>
                            </div>    
    `
    rendercards_empresas.appendChild(col);
});





// rendercards_empresas.innerHTML = EMPRESARIALES.map(particular => {
//     return (`
//     <div class="col-sm-12 col-md-6 col-lg-3">
//                         <div class="cobertura2">
//                              <div class="particulares wrapper bg-surface rounded-10px">
//                                <img  class="image-card" src="../image/seguros_home_lg (1).png" alt="">
//                                <h4>${particular.nombre}</h4>
//                              </div>
//                             </div>    
//                      </div>
//     `)
// })
   



