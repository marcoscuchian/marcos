// declaracion de variables
var piedra=0;
var madera=0;
var ladrillo=0;


// declaracion de funciones//
function comprar(elemento, cantidad ){
    return elemento + cantidad;
}

function usar(elemento, cantidad){
    return elemento - cantidad;
}

function mostrarStock(){
    
    if(piedra == 0){
        var mensaje= " no hay piedra ";
    }
    else if(piedra <= 30){
        var mensaje=" hay poca piedra ";
    }
    else{
        var mensaje=" hay suficiente piedra ";
    }

    console.log( 'Piedra: ' + piedra, mensaje);
    console.log( 'Madera: ' + madera);
    console.log( 'Ladrillo: ' + ladrillo);
}


// ejecuciones
 
mostrarStock();


piedra = comprar(piedra, 500);
madera = comprar(madera, 52);
ladrillo = comprar(ladrillo, 1111);
madera = comprar(madera, 8);
piedra = usar(piedra, 480);

mostrarStock();

var arreglooo = [1,4,5,6,15];

console.log(arreglooo);

arreglooo[4] = 13

console.log(arreglooo[4]);
arreglooo[4]++ ;

arreglooo.push(10);

//[1,4,5,6,14,10]
console.log(arreglooo);

arreglooo.push(34);
console.log(arreglooo);
arreglooo.pop();
console.log(arreglooo);
arreglooo.splice(1,1)
console.log(arreglooo);

