import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Cancion } from '../../app/cancion.interface';
import { ItunesService } from '../../app/itunes.service';
import { DetalleCancionM } from '../detalleCancionM/detalleCancionM';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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


    constructor(private itunes_service : ItunesService, 
                public loadingCtrl: LoadingController,  
                public modalCtrl: ModalController,
                public alertCtrl: AlertController,
                public storage: Storage) { // ponemos los services que necesita (injeccion de dependencias)
        this.enEspera = false;

    }

 

    buscarEnItunes () : void {
        this.loading = this.loadingCtrl.create({
            content: 'Buscando...'
          });
        this.loading.present();
        
        this.storage.set("terminoBusqueda", this.txtABuscar);
        
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
        let errorBusqueda : HttpErrorResponse;
        errorBusqueda = <HttpErrorResponse>error;
        console.log("error " + errorBusqueda);
        console.log(errorBusqueda.error);
        console.log(errorBusqueda.name);
        console.log(errorBusqueda.message);
        console.log(errorBusqueda.status);
        this.mensaje_salida = "Se ha producido un error. Inténtelo más tarde.";
        //this.enEspera = false;
        this.loading.dismiss();
    }

    finPeticion() {
        this.enEspera = false;
    }

    playMuestra( cancion: Cancion) {
    //    document.getElementById("muestra").src = muestraCancion;
     console.log("estoy en playMuestra " + cancion.previewUrl );
   //  previewUr
    }

    mostrarDetalles(indiceCancion : number) : void {
        let cancion : Cancion;
        cancion = this.listaCanciones[indiceCancion];
        const pantModal = this.modalCtrl.create(DetalleCancionM, cancion);
        pantModal.present();
    }

    confirmar () {
        const confirm = this.alertCtrl.create({
            title: '¿Estas seguro de lo que vas a hacer?',
            message: 'asegurate antes',
            buttons: [
              {
                text: 'No',
                handler: () => {
                  console.log('Disagree clicked');
                }
              },
              {
                text: 'Si',
                handler: () => {
                  console.log('Agree clicked');
                }
              }
            ]
          });
          confirm.present();
    }



    consulta () {
        console.log("en consulta");
        let resultadoConsulta : String;
        this.storage.get("terminoBusqueda").then(
            (val) => {resultadoConsulta = val; console.log(resultadoConsulta)});

    }
}