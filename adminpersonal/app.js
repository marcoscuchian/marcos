var listaPersonas = [];

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

function agregarPersona(){

    var nombre= $('#txt_nombre').val(); 
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
    var fila = '';
    for (var i = 0; i < listaPersonas.length; i++) {
        fila +=
        '<tr>'+
            '<td>'+listaPersonas[i].nombre +'</td>'+
            '<td>'+listaPersonas[i].dni+'</td>'+
            '<td>'+listaPersonas[i].fechaIngreso+'</td>'+
            '<td> <a onclick="borrar(' + i + ')" href="#" > borrar </a> </td>'+
        '</tr>';

    }
    tabla.innerHTML = fila;
}

function borrar(i){
    listaPersonas.splice(i, 1);
    actualizarListado();
}






