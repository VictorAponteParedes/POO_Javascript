
import { cuenta } from "./Cuentas/cuenta.js";


export class cuentaDelBanco extends cuenta{
 static numeroDeCuentas = 0 ; 
      constructor(cliente,agencia){  
          super(0,cliente,agencia) ;
      cuentaDelBanco.numeroDeCuentas += 1;
      }  
   //! Sobreescribiendo el compartamiento de extracción 
      extraccion(valor){     
        let porcentaje =  1.1  ;
         return this._extraccion(valor , porcentaje);
         } 
  }  
  