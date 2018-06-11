import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Cancion } from '../../app/cancion.interface';
import { ItunesService } from '../../app/itunes.service';


@Component({
  selector: 'itunespagina',
  templateUrl: 'itunes.html',
  providers: [ItunesService] // aqui pongo los servicio que usará el componente
})

export class Itunes {
    private txtABuscar : string;
    private listaCanciones : Cancion[];
    private mensaje_salida : string;
    private enEspera : boolean;
    private loading : any;

    constructor(private itunes_service : ItunesService, public loadingCtrl: LoadingController) { // ponemos los services que necesita (injeccion de dependencias)
        this.enEspera = false;
    }

    buscarEnItunes () : void {
        this.loading = this.loadingCtrl.create({
            content: 'Buscando...'
          });
        this.loading.present();
        //this.enEspera = true;
        this.listaCanciones = null;
        this.mensaje_salida = "";
        this.itunes_service.getListaCancionesHttp(this.txtABuscar).subscribe(
            ok => this.consumirRespuestaListaCanciones (ok),
            error => this.mostrarError(error),
            () => this.finPeticion());
    }

    consumirRespuestaListaCanciones (ok : any) {
        if (ok.resultCount == 0) {
            this.mensaje_salida = "No hay resultados para la busqueda";
        } else  {
            this.listaCanciones = <Cancion[]> ok.results;
            console.log(this.listaCanciones);
        }
        //this.enEspera = false;
        this.loading.dismiss();
    }

    mostrarError(error : any) {
        this.mensaje_salida = "Se ha producido un error. Inténtelo más tarde.";
        //this.enEspera = false;
        this.loading.dismiss();
    }

    finPeticion() {
        this.enEspera = false;
    }
}