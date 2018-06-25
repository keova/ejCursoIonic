import { Component } from '@angular/core';
import { Login } from '../../app/login.model';
import { LoginService } from '../../app/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
  providers: [LoginService]
})
export class FormularioComponent {
  login : Login;

  constructor(private loginService : LoginService) {
    this.login = new Login();
  }

  acceder(datosForm : Login, valido : boolean) {

    console.log("datosForm" + datosForm);
    console.log("usuario: " + datosForm.usuario + " - pwd: " + datosForm.pwd);

    if (valido) {
      console.log("Los datos son válidos");
      let respuesta : Observable<Object> = this.loginService.postLogin(datosForm);
      respuesta.subscribe(
          ok => {
            console.log("ha vuelto");
            let vresp : HttpResponse<Object> =  <HttpResponse<Object>>ok;
            //console.log("cuerpo: " + vresp.body.saludo);
            console.log("estado: " + vresp.status);
          },
          ko => {
            console.log("ohhhh, error");
            let vresp : HttpResponse<Object> =  <HttpResponse<Object>>ko;
            console.log("estado: " + vresp.status);
          },
          () => {
            console.log("completado");
          }
        );

    } else {
      console.log("Los datos no son válidos");
    }
    console.log("Datos rx (recibidos) " + datosForm.usuario + " " + datosForm.pwd)
  }
}
