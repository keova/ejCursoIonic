// impostamos el decorador
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


// le ponemos el decorador
@Injectable()

export class PersonaService {

    URL_SERVICIO_PERSONAS : string = "http://10.1.2.10:8080/appwebprofe/GetPersona";
    URL_SERVICIO_LISTA_PERSONAS : string = "http://10.1.2.10:8080/appwebprofe/GetListaPersonas";
    constructor(private http : HttpClient) {  // al haberle puesto el private, 
                                 // http pasa a ser una variable de la clase y puede ser usada
                                 // en otros metodos

    }

    getPersonaHttp () : Observable<Persona> { // con <Persona> parametrizo el tipo de objeto observable que se espera
        let personaRemota : Observable<Persona>;
        personaRemota = this.http.get<Persona>(this.URL_SERVICIO_PERSONAS); 
        return personaRemota;
    }

    getListaPersonasHttp () : Observable<Persona[]> {
        let listaPersonaRemota : Observable<Persona[]>;
        listaPersonaRemota = this.http.get<Persona[]>(this.URL_SERVICIO_LISTA_PERSONAS); 
        return listaPersonaRemota;
    }

    getPersona() : Persona {
        let persona : Persona;
        persona = new Persona("Juan", 1.90, 80);
        return persona;
    }
}