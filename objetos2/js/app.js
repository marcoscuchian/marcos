

class Ropa {
    tipo;
    color;
    talle;
    marca;

    constructor(tipo, color, talle, marca){
        this.tipo = tipo;
        this.color = color;
        this.talle = talle;
        this.marca = marca;
    }
}


class Persona {
    pecho;
    piernas;
    pies;

    vestirse(parte, ropa){
        if (parte==1){ 
            this.pecho = ropa;
        }
        else if (parte==2){
            this.piernas = ropa;
        }
        else {
            this.pies = ropa;
        }
    }

    desvestirse(parte){
        if(parte==1){
            this.pecho = null;
        }
        else if(parte==2){
            this.piernas = null;
        }
        else {
            this.pies = null;

        }
    }

    mostrarRopa(){
        console.log('pecho: ', this.pecho);
        console.log('piernas: ', this.piernas);
        console.log('pies: ', this.pies);
    }
}


var remeraNegra = new Ropa("remera","negra","M","niko");
var pantalonGris = new Ropa("pantalon","gris","42","niko");
var zapatos = new Ropa("zapatos","amarillos","42","niko");

var persona = new Persona();

persona.vestirse(1,remeraNegra);
persona.vestirse(2,pantalonGris);
persona.vestirse(3,zapatos);
persona.mostrarRopa();

