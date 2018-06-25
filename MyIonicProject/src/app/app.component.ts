import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { MiPagina } from '../pages/mipagina/mipagina';
import { Itunes } from '../pages/itunes/itunes';
import { DetalleCancionM } from '../pages/detalleCancionM/detalleCancionM';
import { FormularioComponent } from '../pages/formulario/formulario';
import { MapawebPage } from '../pages/mapaweb/mapaweb';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,

  ) {

    this.storage.get("contadorAccesos").then(
      (valorContador) => {
        console.log("contador " + valorContador);
        let contador : number = valorContador;
        if (valorContador == null) {
          contador = 0;
        } 
        if (contador%2 == 0) { // es par
          this.nav.setRoot(HelloIonicPage);
        } else { // es impar
          this.nav.setRoot(Itunes);
        }
        this.storage.set("contadorAccesos", contador+1);
        
      });


    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Mi primera page', component: MiPagina },
      { title: 'Itunes', component: Itunes},
      { title: 'Formulatio', component: FormularioComponent},
      { title: 'Mapa', component: MapawebPage}
      //{ title: 'Detalle canción', component: DetalleCancionM}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    
  }
}
