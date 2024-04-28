//Linea de importación para poder utilizar @Component
import { Component } from "@angular/core";

//DECORADOR
@Component({

    //Aquí se construye el selector, la url del template y la url de styles
    selector: "app-empleados",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]
    
})

//CLASE
export class EmpleadosComponent{

}