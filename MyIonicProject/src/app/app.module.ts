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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { NetworkInterface } from '@ionic-native/network-interface';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, 
    MiPagina,
    Itunes,
    DetalleCancionM
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MiPagina,
    Itunes,
    DetalleCancionM
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkInterface,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
