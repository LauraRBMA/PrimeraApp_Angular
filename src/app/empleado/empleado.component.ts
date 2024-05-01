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

//Property Binding:
habilitacionCuadro=true;

usuRegistrado=false;

textoDeRegistro = "No hay nadie registrado";
textoDeRegistro2 = "No hay nadie registrado";
getRegistroUsuario(){
 this.usuRegistrado = false ;

}

setUsuarioRegistrado(){
//alert ("El usuario se acaba de registrar");
this.textoDeRegistro = "El usuario se acaba de registrar";
}

setUsuarioRegistrado2(event:Event){

  //this.textoDeRegistro2 = "El usuario se acaba de registrar";
  // alert(event.target); --> MUY ÚTIL PARA SABER QUÉ TIPO DE ELEMENTO ES

    /* En este caso es tipo HTMLInputElement. Accedemos a la propiedad value de Event. Para poder acceder a ella debemos hacer un casting a HTMLInputElement */
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro2 = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro2 = "No hay nadie registrado";
    }
  }

    // SUGAR SINTAX -> Nos facilita la vida, sintaxis más cómoda

    variable = "Dirección ts a html";

    cambiaVariable(event:Event){
      this.variable=(<HTMLInputElement>event.target).value;
    }
}
