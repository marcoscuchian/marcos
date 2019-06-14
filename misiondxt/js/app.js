var segundos = 1;
var minutos = 1;
var horas = 5;
var mostrarHora =  document.getElementById("horas");
var mostrarMinutos = document.getElementById("minutos");
var mostrarSegundos = document.getElementById("segundos");

actualizarTemporizador();
temporizador();

function temporizador(){
    
    setTimeout(function(){

        if(segundos > 0){
            segundos--;  
        }    
        else {
            segundos = 59;
            if(minutos > 0){
                minutos--;
            }
             else{
                minutos = 59;
                horas--;
            }
        }    
        
        actualizarTemporizador();
        temporizador();
    
    
    }, 1000);
}

function actualizarTemporizador() {
    mostrarHora.innerHTML = pad(horas, 2, '0');
    mostrarMinutos.innerHTML = pad(minutos, 2, '0');
    mostrarSegundos.innerHTML = pad(segundos, 2, '0');
}

function pad(cadena, longitud, caracter) { 
    var str = cadena + "";
    
    if(longitud <= str.length)  
        return str;
    else
        return pad(caracter+str, longitud, caracter);
}

/*$('.nav-link.dropdown-toggle').hover(
    function() {
        $(this).click();
    }
)*/