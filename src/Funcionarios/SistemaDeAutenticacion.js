  export class SistemaDeAutenticacion {
    static login(autenticado, contraseña){
      if(SistemaDeAutenticacion.esAutenticable(autenticado)){
        return autenticado.autenticar(contraseña);

      }
      return false;
    }
    static esAutenticable(autenticado){
            return "autenticar" in autenticado &&
            autenticado.autenticar instanceof Function
    } 
  }
