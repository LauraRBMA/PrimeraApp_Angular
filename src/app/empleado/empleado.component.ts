import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'] // Poner el estilo apuntando al archivo externo
  // Poner el estilo Inline:
  //styles:["p{background-color: aquamarine;}"] 
})
export class EmpleadoComponent implements OnInit{

//Crear propiedades para interpolación --> {{se llamarán así donde queramos usarlas}}
nombre = "Laura";
apellido = "Ramos";
empresa_estatica = "Agroseguro";
edadNueva = 78;

//Modificador de acceso. Solo podrá acceder este método de esta clase. Necesario el getter y setter para acceder a él.
private edad = 20;

llamaEmpresa(value:string){

}

getEdad(){
  return this.edad;

}

constructor(){}

ngOnInit(): void{

}

}
