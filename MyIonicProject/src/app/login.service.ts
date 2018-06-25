import { Injectable, SystemJsNgModuleLoaderConfig } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Login } from "./login.model";
import { Observable } from "rxjs/Observable";


@Injectable()

export class LoginService {
    static DIRECCION_POST : string = "http://10.1.2.10:8080/appwebprofe/PostLogin";
    constructor (private http : HttpClient) {

    }

    postLogin(login : Login) : Observable<Object> {

        let respuesta : Observable<Object>;
        
        let json_login : string = JSON.stringify(login);
        console.log("JSON a enviar " + json_login);

        let cabecera : HttpHeaders = new HttpHeaders();
        cabecera.set('Content-type', 'application/json;charset=UTF8');

        respuesta = this.http.post(LoginService.DIRECCION_POST, json_login, {headers:cabecera, observe: "response"});

        return respuesta;
    }
}