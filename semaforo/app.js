var prendida = 0;
var amarillo = document.querySelector(".luz.amarillo");
var verde = document.querySelector(".luz.verde");
var rojo = document.querySelector(".luz.rojo");

console.log(amarillo, verde, rojo);

rojo.classList.add("prendida");

function cambiarLuz(){
    if(prendida==0){
        rojo.classList.remove("prendida");
        verde.classList.add("prendida");
        prendida++;
        setTimeout(cambiarLuz, 5000);
    }
    else if(prendida==1){
        verde.classList.remove("prendida");
        amarillo.classList.add("prendida");
        prendida++;
        setTimeout(cambiarLuz, 2000);
    }
    else {
        amarillo.classList.remove("prendida");
        rojo.classList.add("prendida");
        prendida = 0;
        setTimeout(cambiarLuz, 3000);
    }
}

setTimeout(cambiarLuz, 3000);

/*
add => agregar
remove => borrar
toggle => alternar
replace => reemplazar
*/

