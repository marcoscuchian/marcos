// declaracion de variables
var piedra=0;
var madera=0;
var ladrillo=0;


// declaracion de funciones//
function comprar(elemento, cantidad){
    return elemento + cantidad;
}

function usar(elemento, cantidad){
    return elemento - cantidad;
}

function mostrarStock(){
    
    if(piedra == 0){
        var mensaje= " no hay piedra ";
    }
    else if(piedra < 30){
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



