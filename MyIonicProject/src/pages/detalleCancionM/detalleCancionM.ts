import { Component } from '@angular/core';
import { Cancion } from '../../app/cancion.interface';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'detallecancionm',
    templateUrl: 'detalleCancionM.html'
    //providers: [ItunesService] // aqui pongo los servicio que usará el componente
})

export class DetalleCancionM {
    private cancion : Cancion;

    constructor(public parametros : NavParams, private viewCtrl : ViewController) { // ponemos los services que necesita (injeccion de dependencias)
        this.cancion = <Cancion>this.parametros.data;
        console.log("cancion " + this.cancion);
    }

    playMuestra() {
       // document.getElementById("muestra").play();
    }

    cerrarModal() {
        this.viewCtrl.dismiss();
    }
}