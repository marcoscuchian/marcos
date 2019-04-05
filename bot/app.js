var camino = ['s','n','n','n','n'];
var distancia= camino.length;

function posicionActual(){

    // posicion actual que estoy revisando"""
    var posicion = 0;
    
    // ME DICE SI LA ENCONTRE O NO//

    var encontrado = false;
    
    while(encontrado==false) {
        
        
        if (camino[posicion]=='s') {
            encontrado = true;
        }
        else {
            posicion++ ;
            
        }

        
    }
    return posicion
}
    
function moverDerecha(){

    var posicion = posicionActual() ;
    
    if ( distancia<= posicion){
        return false;
    }
    else {
        camino [posicion]= 'n';
        posicion++ ;
        camino[posicion]='s';
        return posicion;        
    }

}

function moverIzquierda(){

    var posicion= posicionActual();
    if(0==posicion){
        return false;
    }
    else {
        camino[posicion]='n';
        posicion--;
        camino[posicion]='s';
        return posicion;
    }
    
}
