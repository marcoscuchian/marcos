class Reloj {
  empleados = [];

  ingreso(empleado){
    this.empleados.push(empleado);
  
  }

  salida(posicion){
    this.empleados.splice(posicion,1);
  }

  marcar(empleado){
    var posicion = this.empleados.indexOf(empleado);
    
    if(posicion == -1){
      this.ingreso(empleado);
    }
    else {
      this.salida(posicion);
    }

    this.mostrar_empleados();
  }

  mostrar_empleados(){
    
    var html = "";
    
    for (var i = 0; i < this.empleados.length; i++) {
      
      html +=
      '<tr>'+
        '<td>'+
          this.empleados[i].legajo + ' - ' + this.empleados[i].nombre+
        '</td>'+
      '</tr>';
    }

    var tabla = $('#tbl_reloj tbody');
    tabla.html(html)

  }

}
