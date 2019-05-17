// variables globales o principales//
var listaMesas = [];
var contadorMesas=0;
var estados = ["Libre","Reservada","Ocupada"];
// funcion para mostrar todas las mesas//
function mostrarMesas(){
    var html = '';

    for(var i=0 ; i< listaMesas.length ; i++) { 

        var clase = "";
        var clase2= "";
        var clase3 = "";

        if(listaMesas[i].estado == 1 ) {
            clase = "d-none"; 
        }
        
        else if(listaMesas[i].estado ==2){
            clase2 ="d-none";
        }
        else{
            clase3="d-none";
        }
        var mesaNueva=
        '<div class="col-sm-12 col-md-4 col-lg-3">'+
            '<div class="card my-2" style="width: 18rem;">'+
                '<button type="button" class="close"  aria-label="Close" onclick="borrarMesa('+i+')">' +
                    '<span aria-hidden="true">&times;</span>'+
                '</button>'+
                '<div class="card-body">'+
                    '<h5 class="card-title">MESA #'+ listaMesas[i].numeroMesa +'</h5>'+
                    '<h6 class="card-subtitle mb-2 text-muted">'+ estados[listaMesas[i].estado] +'</h6>'+
                    '<a href="#" class="card-link '+ clase+' '+ clase2+'" onclick="cambiarEstado('+i+',1)">Reservar </a>'+
                    '<a href="#" class="card-link '+ clase2+'" onclick="cambiarEstado('+i+',2)">Ocupar</a>'+
                    '<a href="#" class="card-link '+ clase3+'" onclick="cambiarEstado('+i+',0)">LIBERAR</a>'+

                '</div>'+
            '</div>'+
        '</div>';


        html += mesaNueva;
    }

    document.querySelector("#grillaMesas").innerHTML = html;

}

function cambiarEstado(posicion,estado){
    listaMesas[posicion].cambiarEstado(estado);
    mostrarMesas();

}

// funcion para agregar mesa//
function agregarMesa(){
    contadorMesas++;
    var nuevamesa = new Mesa(contadorMesas);
    listaMesas.push(nuevamesa);
    mostrarMesas();
}

function borrarMesa(posicion){
    listaMesas.splice(posicion,1);
    mostrarMesas();
}





// crear una mesa es un molde siempre va al ultimo//
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

