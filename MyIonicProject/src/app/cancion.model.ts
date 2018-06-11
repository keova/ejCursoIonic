export class Cancion {
    trackid : string;
    trackName : string;
    artistName : string;
    artworkUrl100 : string;
    trackPrice : number;
    currency : string;
    previewUrl : string;
    
    constructor(trackid : string, trackName : string, artistName : string, artworkUrl100 : string, 
                trackPrice : number, currency : string, previewUrl : string) {
        this.trackid = trackid; 
        this.trackName = trackName;
        this.artistName = artistName;
        this.artworkUrl100 = artworkUrl100;
        this.trackPrice = trackPrice;
        this.currency = currency;
        this.previewUrl = previewUrl;
    }
}
