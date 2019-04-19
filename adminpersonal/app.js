var listaPersonas = [];

function agregarPersona(){

    var nombre= document.querySelector("#txt_nombre").value; 
    var dni= document.querySelector("#txt_dni").value;
    var fecha= document.querySelector("#txt_fecha").value;


    if (nombre==""){
        alert("completa campo de nombre");
        return false;
        
    }
    else if (dni==""){
        alert("completa campo de dni");
        return false;
    }
    else if (fecha==""){
        alert("completa campo de fecha");
        return false;
    }
    

    var persona =new Persona(nombre,dni,fecha);

    listaPersonas.push(persona);

    document.querySelector("#txt_nombre").value = "";
    document.querySelector("#txt_dni").value= "";
    document.querySelector("#txt_fecha").value= "";

    actualizarListado();
}


function actualizarListado(){
    var tabla = document.querySelector(".tablap tbody");
    
    tabla.innerHTML = '';

    for (var i = 0; i < listaPersonas.length; i++) {
        var fila =
        '<tr>'+
            '<td>Marcos</td>'+
            '<td>39073762</td>'+
            '<td>15/05/2015</td>'+
            '<td>Borrar</td>'+
        '</tr>';
    }
    tabla.appendChild(fila);
}

class Persona {
    nombre;
    dni;
    fechaIngreso;

    constructor(nombre,dni,fechaIngreso){
        this.nombre = nombre;
        this.dni = dni;
        this.fechaIngreso = fechaIngreso;
    }
}





