import * as mapboxgl from "mapbox-gl";

import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MapBoxService {
  mapbox = mapboxgl as typeof mapboxgl;

  map!: mapboxgl.Map;

  style = `mapbox://styles/mapbox/streets-v11`;

  constructor() {
    this.mapbox.accessToken = environment.mapBox;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: "map",
      style: this.style,
      zoom: 13,
      center: [-58.036799280528435, -31.387692766766204],
      //pitch:40,
      //bearing:-40,
      attributionControl: false,
    }).addControl(
      new mapboxgl.AttributionControl({
        customAttribution: "Mapa",
      })
    );
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
