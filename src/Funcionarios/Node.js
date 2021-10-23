  // Todos los archivos importados
  import{Cliente} from "./Cliente.js" ;
  import {Gerente} from "./Gerente.js"
  import {Director} from "./Director.js"
  import { SistemaDeAutenticacion } from "./SistemaDeAutenticacion.js";
  
    // Crea los objetos
   const director = new Director("Manuel",10000,3000);
   const gerente = new Gerente("Fernando",5000,2000);
   const cliente = new Cliente('Laisa',5500,'00001')
  
                    // Todo sobre el Director
   director.registrarContraseña("1234567")
   const contraseñaDirector = SistemaDeAutenticacion.login(director,"123457")
   //console.log(director)
   console.log(director)
                    // todo sobre el Cliente 

   const contraseñaCliente = SistemaDeAutenticacion.login(cliente,'0001')
   //console.log(cliente)
   console.log(cliente)


                   // Todo sobre el Gerente 
   gerente.registrarContraseña("654321")
   const contraseñaGerente= SistemaDeAutenticacion.login(gerente,"654321")
   //console.log(gerente)

 
