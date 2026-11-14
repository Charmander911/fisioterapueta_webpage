document.addEventListener('DOMContentLoaded', function (){
    console.log('DOM fully loaded and parsed');
    scrollNavBar();
    navegacionFija();
});



function scrollNavBar(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function (e){
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({behavior: 'smooth'});
        })
    });
}

function navegacionFija(){
    const navbar = document.querySelector('.navbar');
    const nosotros = document.querySelector('.nosotros-contenedor');
    console.log(nosotros);

    // console.log(navbar.getBoundingClientRect().bottom);
    console.log(nosotros.getBoundingClientRect().top);

    document.addEventListener('scroll', function (){


        if(nosotros.getBoundingClientRect().top <= 100){
            navbar.classList.add('fixed');
        }else{
            navbar.classList.remove('fixed');
        }
    });  
    
}

// // function crearGaleria (){

// //     const galeria = document.querySelector('.galeria-imagenes');
    
// //     for (let i = 1; i<=16; i++){
// //         const imagen = document.createElement('IMG');
// //         imagen.src = `build/img/gallery/full/${i}.jpg`;

// //         imagen.onclick = function () {
// //             mostrarImagen(i);
// //         }

// //         galeria.appendChild(imagen) 
// //     }
// // }

// // function mostrarImagen (i) {

// //     const imagen = document.createElement('IMG');
// //     imagen.src = `build/img/gallery/full/${i}.jpg`;


// //     const modal = document.createElement('DIV');
// //     modal.classList.add('modal');
// //     modal.onclick = cerrarModal;
// //     modal.appendChild(imagen);

// //     // Agregar al HTML

// //     const body = document.querySelector('body');
// //     body.classList.add('overflow-hidden')
// //     body.appendChild(modal)


    
// // }

// // function cerrarModal (){
// //     const cerrar = document.querySelector('.modal');
// //     cerrar.classList.add('fade-out');

// //     setTimeout(() => {
// //         cerrar?.remove();
// //         const body = document.querySelector('body');
// //         body.classList.remove('overflow-hidden')
// //     }, 500);
    
// // }

// function resaltarEnlace(){
//     document.addEventListener('scroll', function(){
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.navegacion-principal a');

//         let actual = '';
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
            
//             if(window.scrollY >= (sectionTop - sectionHeight / 3)){
//                 actual = section.id;
//             }
            
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if(link.getAttribute('href') === '#' + actual){
//                 link.classList.add("active");
//             }
//         });
//     });
    
// }

// function scrollNav(){
//     const navLinks = document.querySelectorAll('.navegacion-principal a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', e => {
//             e.preventDefault();
//             const sectionScroll = e.target.getAttribute('href');
//             const section = document.querySelector(sectionScroll);
            
//             section.scrollIntoView({behavior: 'smooth'})
//         })
//     })
    
// }