import { cuenta } from "./Cuentas/cuenta.js";

export class Cuentasalario extends cuenta{
    constructor(cliente){
     super(0,cliente,"Visa")
    }
   extraccion(valor){
    let porcentaje = parseInt(1.1);     
    return this._extraccion(valor,porcentaje );
   }
}