// impostamos el decorador
import { Injectable } from '@angular/core';
import { Cancion } from './cancion.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


// le ponemos el decorador
@Injectable()

export class ItunesService {

    URL_SERVICIO_BUSCAR_CANCIONES : string = "https://itunes.apple.com/search?media=music&limit=20&term=";
    constructor(private http : HttpClient) {  

    }

    getListaCancionesHttp (txtABuscar : string) : Observable<Cancion[]> {
        let listaCanciones : Observable<Cancion[]>;
        listaCanciones = this.http.get<Cancion[]>(this.URL_SERVICIO_BUSCAR_CANCIONES + txtABuscar); 
        return listaCanciones;
    }

}