    export class Funcionario {
    constructor(nombre, salario,ci){
    this._nombre = nombre;
    this._salario = salario;
    this._ci = ci;

    this._bonificacion = 1;
    this._contraseña;
    }
     autenticar(contraseña){
       return contraseña == this._contraseña;      
     }

     registrarContraseña(contraseña){
        this._contraseña = contraseña;
     }
    
  }
  