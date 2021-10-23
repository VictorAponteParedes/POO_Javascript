import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(nombre,salario,ci){
        super(nombre,salario,ci)
        this._bonificacion = 1.1;
    }
}