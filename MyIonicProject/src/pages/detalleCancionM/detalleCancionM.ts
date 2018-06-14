import { Component } from '@angular/core';
import { Cancion } from '../../app/cancion.interface';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
    selector: 'detallecancionm',
    templateUrl: 'detalleCancionM.html'
    //providers: [ItunesService] // aqui pongo los servicio que usará el componente
})

export class DetalleCancionM {
    private cancion : Cancion;
    private sonandoMuestra : boolean = false;

    constructor(public parametros : NavParams, 
                private viewCtrl : ViewController, 
                private nativeAudio: NativeAudio) { // ponemos los services que necesita (injeccion de dependencias)
        this.cancion = <Cancion>this.parametros.data;
        console.log("cancion " + this.cancion);
        this.nativeAudio.preloadComplex('muestra', this.cancion.previewUrl, 1, 1, 0).then((res) => {
            console.log("preloadComplexOK" + res);
        }, (err) => {
            console.log(err);
        });
    }

    playMuestra() {
        this.nativeAudio.play('muestra', function() {this.sonandoMuestra = false;}).then((res) => {
            this.sonandoMuestra = true;
        }, (err) => {
            console.log(err);
        });
    }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }
}