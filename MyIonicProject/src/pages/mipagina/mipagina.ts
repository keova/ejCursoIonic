import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';
import { AlertController } from 'ionic-angular';


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
  private personaCargada : boolean;
  private listaPersonas : Persona[];

  constructor(persona_service : PersonaService, 
            public alertCtrl: AlertController) { // ponemos los services que necesita (injeccion de dependencias)
    this.estatura = 1.89;
    this.peso = 85;
    //this.persona = persona_service.getPersona();
    //this.persona = new Persona("", 0, 0);
    this.personaCargada = false;
    persona_service.getPersonaHttp().subscribe(
      ok => this.consumirRespuestaPersona (ok));

    persona_service.getListaPersonasHttp().subscribe(
      ok => this.consumirRespuestaListaPersona (ok));
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  consumirRespuestaPersona (ok : any) {
    this.persona = <Persona> ok;
    this.personaCargada = true;
    console.log("persona recibida " + this.persona.nombre + " - " + this.persona.peso + " - " + this.persona.estatura);
  }

  mostrarPersona(persona : Persona) : void {
    console.log("Persona " + persona.nombre + " " + persona.estatura + "m " + persona.peso + "kg");
  }

  consumirRespuestaListaPersona (ok : any) {
    this.listaPersonas = <Persona[]> ok;
    console.log(this.listaPersonas);
    for (let i = 0; i < this.listaPersonas.length; i++) {
      this.mostrarPersona (this.listaPersonas[i]);
    }
    // otra forma
    for (let i in this.listaPersonas) {
      this.mostrarPersona (this.listaPersonas[i]);
    }
    // otra forma
    this.listaPersonas.map (personita => this.mostrarPersona(personita));

  }

  calcularIMC () {
    console.log("ha llamado a calcularIMC");
    let imc : number = 0;
    imc = this.persona.peso / (this.persona.estatura*this.persona.estatura);
    console.log("el IMC es " + imc);
    this.resultado = imc;
  }
}

