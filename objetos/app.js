// var persona = {
//     nombre: "Marcos",
//     apellido: "cuchian",
//     edad: 19,
//     saludar(){
//         console.log("hola soy "+ this.nombre);
//     }
// };


// var auto = {
//     color:"rojo",
//     marca:"fitito",
//     modelo: "1996",
//     arrancar(){
//         console.log("arranco el auto");
//     },
//     frenar(){
//         console.log("se freno");
//     },
//     acelerar(){
//         console.log("acelero");
//     }

// };

class Auto {
    color;
    marca;
    modelo;

    constructor(color,marca,modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar(){
        console.log("arranco")
    }
    frenar(){
        console.log("frennoo")

    }
    acelerar(){
        console.log("aceleroo")

    }

    
} 


var auto1 = new Auto("rojo", "fiat", "1960");
var auto2 = new Auto("azul", "fiat", "1980");
