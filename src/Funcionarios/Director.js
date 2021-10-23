import { Funcionario } from "./Funcionario.js";

export class Director extends Funcionario {
    constructor(nombre,salario,ci){
        super(nombre,salario,ci)
        this._bonificacion = 2;
        
}  

  }