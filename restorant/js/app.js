// variables globales o principales//
var listaMesas = [];
var contadorMesas=0;


// funcion para mostrar todas las mesas//
function mostrarMesas(){
    var html = '';

    for(var i=0 ; i< listaMesas.length ; i++) { 
        var mesaNueva=
        '<div class="col-sm-12 col-md-4 col-lg-3">'+
            '<div class="card" style="width: 18rem;">'+
                '<div class="card-body">'+
                    '<h5 class="card-title">MESA #'+ listaMesas[i].numeroMesa +'</h5>'+
                    '<h6 class="card-subtitle mb-2 text-muted">ESTADO</h6>'+
                    '<a href="#" class="card-link">Reservar</a>'+
                    '<a href="#" class="card-link">Ocupada</a>'+
                '</div>'+
            '</div>'+
        '</div>';


        html += mesaNueva;
    }

    document.querySelector("#grillaMesas").innerHTML = html;

}
// funcion para agregar mesa//
function agregarMesa(){
    contadorMesas++;
    var nuevamesa = new Mesa(contadorMesas);
    listaMesas.push(nuevamesa);
    mostrarMesas();
}
// crear una mesa//
class Mesa { 
    estado;
    numeroMesa;

    constructor(nm){
        /* 
         0 = libre
         1 = reservado
         2 = ocupado
        */
        this.estado=0;
        this.numeroMesa=nm;

    }

    cambiarEstado(estadoNuevo){
        this.estado = estadoNuevo;
    }

}
