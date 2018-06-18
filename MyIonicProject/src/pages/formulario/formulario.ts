import { Component } from '@angular/core';
import { Login } from '../../app/login.model';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
  styles:  [``]
})
export class FormularioComponent {
  login : Login;

  constructor() {
    this.login = new Login();
  }

  acceder(datosForm : Login, valido : boolean) {
    if (valido) {
      console.log("Los datos son válidos");
    } else {
      console.log("Los datos no son válidos");
    }
    console.log("Datos rx (recibidos) " + datosForm.usuario + " " + datosForm.pwd)
  }
}
