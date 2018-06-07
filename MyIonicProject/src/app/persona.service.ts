// impostamos el decorador
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
// le ponemos el decorador
@Injectable()

export class PersonaService {

    constructor() {

    }

    getPersona() : Persona {
        let persona : Persona;
        persona = new Persona("Juan", 1.90, 80);
        return persona;
    }
}