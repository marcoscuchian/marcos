class Brujo extends Persona{
  mana;
  daño;
  alcance;
  constructor (mana,daño,alcance,nombre,bando){
  this.mana = mana;
  this.daño = daño;
  this.alcance = alcance;
  super(nombre,14,4,bando)}
  
  inmovilizar(){}
}