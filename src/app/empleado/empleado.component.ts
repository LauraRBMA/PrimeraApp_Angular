import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'] //Poner el estilo apunando al archivo externo
  ////Poner el estilo Inline:
  //styles:["p{background-color: aquamarine;}"] 
})
export class EmpleadoComponent {

//Crear propiedades para interpolación
nombre = "Laura";
apellido = "Ramos";
//Modificador de acceso. Solo podrá acceder este método de esta clase. Necesario el getter y setter para acceder a él.
private edad = 27;
edadNueva = 8;

//empresa = "Pildoras Informaticas";

llamaEmpresa(value:string){

}

getEdad(){
  return this.edad;

}


}
