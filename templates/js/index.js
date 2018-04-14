function prueba(numero) {
    let sum=0;
    for (let index = 0; index < 10 ; index++) 
    {
        const element = index*index;

        sum=sum + element;
       return sum;
    }
    

    if ([].length == 0) {
        console.log('es un arreglo vacio')
    }
    

    let count = 0;
    while (count < 100) {
        console.log(count);
        count++;
        
    
    }
    switch (numero) {
        case 1:
            console.log('soy el numero 1')
            break;
        case 1:
            console.log('soy el numero 2')    
    
        default:
            console.log('soy el numero 4')
            break;
    }
}
prueba(1);

let objeto = {
    nombre: 'objeto 1',
    calzado: 9,
    datos:{
        perro: 'firulais',
        edad:8
    },
    mascotas:[{
        nombre:'Firulais',
        edad:8
    },{
        nombre:'pepe',
        edad:21
    }],
    metodo: function(params){
        return params=2;
    }
};


let objeto={
    personas:
    [{
        nombre:'pepe',
        edad:21,
        direccion1:'lagos',
    }]
}
console.log(objeto.datos.perro);
console.log('[Object]:', objeto.nombre);
console.log(objeto.metodo('buen pedo objeto.metodo'));
console.log(funcion(6));
(function(){
     console.log('que onda que pex');
})();

console.log(objeto.mascotas[0].nombre);
(function(obj){
    for (let mascota = 0 of obj){

        console.log(mascotas);
        
    }
})(objeto.mascotas);

for(let key in objeto){
    console.log(key);
    console.log(objeto[key]);
}
router.get('/inicio')

module.exports = router;

