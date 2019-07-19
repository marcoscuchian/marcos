class Sacerdote extends Persona{
  mana;
  poder;
  arma;

  constructor (mana,poder,arma, nombre, bando){
    this.mana = mana;
    this.poder = poder;
    this.arma = arma
    super(nombre,10, 2, bando)

  }

  curar() {
  }
}