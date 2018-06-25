import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MapawebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mapaweb',
  templateUrl: 'mapaweb.html',

})
export class MapawebPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapawebPage');
  }

}
