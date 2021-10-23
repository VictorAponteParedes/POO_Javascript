    
    export class cuenta {
    constructor(cuentaInicial,cliente,agencia){
      if (this.constructor == cuenta){
        throw new Error("Esta es una Cuenta privada!");
      }
      
    this._total = cuentaInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    }  
    
    set Cliente(nuevoValor){
      if(nuevoValor instanceof Cliente){
        this._cliente = nuevoValor;
      }
    }
 
 
     get Cliente(){
 
     return this._cliente; 
 
      }
 
      get total(){
 
       return this._total; 
 
      }
    extraccion(valor){ 
     throw new Error("el metodo de la cuenta extraccion es abstractá")
        } 
    _extraccion(valor , porcentaje ){

      const valorSacado = porcentaje * valor ;
      if (this._total >= valorSacado){
        this._total -= valorSacado;
        return valorSacado;
       } 
       return 0;

    }


        deposito(valor){  
       this._total += valor
       } 
   
       transferir(valor, cuenta){
      
       const valorSacado = this.extraccion(valor);
       cuenta.deposito(valorSacado);
       }
   

}







