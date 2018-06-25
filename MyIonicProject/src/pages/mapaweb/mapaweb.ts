import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google; // variable global ¿accesible desde todas las clases?

@Component({
  selector: 'mapaweb',
  templateUrl: 'mapaweb.html'
})
export class MapawebPage {

  map: any;

  constructor(private geolocation: Geolocation) {

    console.log ("pasa por el constrcutor");
  }

  ionViewDidLoad(){
    this.getPosition();
    console.log ("pasa por ionViewDidLoad");
  }

  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      console.log ("pasa por getCurrentposition response");
      this.loadMap(response);
    })
    .catch(error =>{
      console.log ("pasa por getCurrentposition ERRORAZO");
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    console.log ("pasa por loadMapa");
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }
  
}