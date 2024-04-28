// Linea de importación para poder utilizar el decorador @Component
import { Component } from "@angular/core";

// DECORADOR. Aquí se construye el selector, la url del template y la url de styles
@Component({

    selector: "app-empleados", // selector -> palabra reservada que se utiliza para incluír este componente en otro
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]
    
})

// CLASE. Instrucción export (para que sea accesible)
export class EmpleadosComponent{

}