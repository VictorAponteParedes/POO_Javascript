import { cuenta } from "./Cuentas/cuenta.js";

export class cuentaDeAhorro extends cuenta{
constructor(cuentaInicial,cliente,agencia){
  super(cuentaInicial,cliente,agencia)
}
   extraccion(valor){
     const porcentaje = 1.02;
     return this._extraccion(valor,porcentaje);
   }
}


