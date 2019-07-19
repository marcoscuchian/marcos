class Guerrero extends Persona{
  escudo = 100;
  arma;
  defensa;
 
  constructor(escudo,arma,defensa,nombre,bando){
    this.escudo = escudo;
    this.arma = arma;
    this.defensa = defensa;
    super(nombre,11,1,bando)
}

  atacar() { }
}
