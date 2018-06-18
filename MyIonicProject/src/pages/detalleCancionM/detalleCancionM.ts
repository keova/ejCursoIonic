import { Component } from '@angular/core';
import { Cancion } from '../../app/cancion.interface';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
//import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';


@Component({
    selector: 'detallecancionm',
    templateUrl: 'detalleCancionM.html'
    //providers: [ItunesService] // aqui pongo los servicio que usará el componente
})

export class DetalleCancionM {
    private cancion : Cancion;
    private sonandoMuestra : boolean = false;
    private muestra: MediaObject;

    constructor(public parametros : NavParams, 
                private viewCtrl : ViewController, 
                private media: Media) {
                //private nativeAudio: NativeAudio) { // ponemos los services que necesita (injeccion de dependencias)
        this.cancion = <Cancion>this.parametros.data;
        console.log("cancion " + this.cancion);
        console.log("muestra " + this.cancion.previewUrl);

        this.muestra = this.media.create(this.cancion.previewUrl);
     //   this.muestra.onStatusUpdate.subscribe(
     //       (status) => {console.log("estado media " + status);},
     //       (error) => {console.log("error " + error)});
        this.muestra.onStatusUpdate.subscribe(status => this.controlarStatus(status));

        /*this.nativeAudio.preloadComplex('muestra', this.cancion.previewUrl, 1, 1, 0).then((res) => {
            console.log("preloadComplexOK" + res);
        }, (err) => {
            console.log(err);
        });*/
    }


    controlarStatus(status: any) {
        console.log("estado media " + status);
        //if (status == Media.MEDIA_RUNNING) {

        //}
    }

    playMuestra() {
        //this.muestra = this.media.create(this.cancion.previewUrl);
        this.muestra.play();

        /*this.nativeAudio.play('muestra', function() {this.sonandoMuestra = false;}).then((res) => {
            this.sonandoMuestra = true;
        }, (err) => {
            console.log(err);
        });*/
    }

    stopMuestra() {
        this.muestra.stop();
    }
//export PATH=$PATH:/Users/Dev1/Library/Android/sdk/platform-tools
    cerrarModal() {
        this.muestra.stop()
        this.viewCtrl.dismiss();
    }
}