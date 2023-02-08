export interface Casa {
        nombre:           string;
        compra:           string;
        venta:            string;
        agencia:          string;
        observaciones:    Observaciones;
        geolocalizacion?: Geolocalizacion;
        telefono?:        Observaciones | string;
        direccion?:       Observaciones | string;
        decimales:        string;
    }
    
export interface Observaciones {
}
    
export interface Geolocalizacion {
        latitud:  Observaciones | string;
        longitud: Observaciones | string;
 }
    
export interface PadreCasa{
        casa: Casa[];
}
    
export interface apiResponse {
        [key: string]: Casa
}