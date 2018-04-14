/*let prueba = document.getElementById('prueba');
console.log(prueba);*/

/*let element = document.getElementById('carrusel');*/
let element = $('#carrusel');
let carrusel = new Carrusel(element);
/*console.log(carrusel.speed);*/

carrusel.init();

setTimeout(function(){
    carrusel.next();
},2000);

/*let chido = new Carrusel();

chido.speed = 5000;

chido.init();*/