import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MiPagina } from '../pages/mipagina/mipagina'; 
import { Itunes } from '../pages/itunes/itunes';
import { DetalleCancionM } from '../pages/detalleCancionM/detalleCancionM';
import { FormularioComponent } from '../pages/formulario/formulario';
import { MapawebPage } from '../pages/mapaweb/mapaweb';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { NetworkInterface } from '@ionic-native/network-interface';
//import { Network } from '@ionic-native/network';
//import { NativeAudio } from '@ionic-native/native-audio';
import { Media } from '@ionic-native/media';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from './validatorpwd.directive';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    MiPagina,
    MapawebPage,
    Itunes,
    DetalleCancionM,
    FormularioComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MiPagina,
    Itunes,
    MapawebPage,
    DetalleCancionM,
    FormularioComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkInterface,
    Geolocation,
    //Network,
    //NativeAudio,
    Media, 
    //MediaObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
