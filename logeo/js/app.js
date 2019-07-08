var empleados = [];
var reloj = new Reloj();

function agregar_empleado() {

  var nombre = document.getElementById("txt_nombre").value;
  var legajo = document.getElementById("txt_legajo").value;

  if (nombre=="") {
    alert("Ingrese un Nombre");
    return false;
    
  }
  if (legajo=="") {
    alert("Ingrese un Legajo");
    return false;
    
  }
  
  var empleado = new Empleado(nombre,legajo);
  
  empleados.push(empleado);
  mostrar_empleado(empleado);

  document.getElementById("txt_nombre").value = "";
  document.getElementById("txt_legajo").value = "";
  
}

function mostrar_empleado(empleado) {
  var i = empleados.indexOf(empleado);

  var html = 
  '<tr>'+
    '<td>'+
      i +
    '</td>'+
    '<td>'+
      empleado.legajo +
    '</td>'+
    '<td>'+
      empleado.nombre+
    '</td>'+
    '<td>'+
      '<a href="#" onclick="marcar('+i+');">'+
         'Marcar'+
      '</a>'+
    '</td>'+
  '</tr>';

  var tabla = $('#tbl_empleados tbody');
  tabla.append(html);
}

function marcar(i) {
  reloj.marcar(empleados[i]);
}
