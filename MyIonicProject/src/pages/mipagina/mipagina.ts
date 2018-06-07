import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service'


@Component({
  selector: 'mipagina',
  templateUrl: 'mipagina.html',
  providers: [PersonaService] // aqui pongo los servicio que usará el componente
})
export class MiPagina {
  private persona : Persona;
  private peso : number;
  private estatura : number;
  private resultado : number;

  constructor(persona_service : PersonaService) { // ponemos los services que necesita
    this.estatura = 1.89;
    this.peso = 85;
    this.persona = persona_service.getPersona();
  }

  calcularIMC () {
    console.log("ha llamado a calcularIMC");
    let imc : number = 0;
    imc = this.persona.peso / (this.persona.estatura*this.persona.estatura);
    console.log("el IMC es " + imc);
    this.resultado = imc;
  }
}

