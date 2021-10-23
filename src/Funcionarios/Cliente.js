export class Cliente{
get ci(){
    return this._ci;
}
constructor(nombre ,ci , contraseña){
    this.nombre = nombre;
    this._ci = ci ;
    this._contraseña = contraseña; 
}
   autenticar(){
       return true;
   }

}