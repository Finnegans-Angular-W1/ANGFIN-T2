import { Component, OnInit, OnDestroy } from '@angular/core';
import { Map, Marker , MapOptions, tileLayer, latLng, icon } from 'leaflet';

@Component({
  selector: 'app-section-mapa',
  templateUrl: './section-mapa.component.html',
  styleUrls: ['./section-mapa.component.scss']
})
export class SectionMapaComponent implements OnInit, OnDestroy {
  // @Output() map$: EventEmitter<Map> = new EventEmitter;
  // @Output() zoom$: EventEmitter<number> = new EventEmitter;

  markerIcon = icon({
    iconSize: [ 35, 35 ],
    iconAnchor: [ 15, 0 ],
    iconUrl: 'assets/landing-images/bank.png',
    shadowUrl: ''
    // iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
    // shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
  });
        // icon({
        // iconSize: [25, 41],
        // iconAnchor: [13, 41],
        // iconUrl: 'assets/marker-icon.png',
        // shadowUrl: 'assets/marker-shadow.png'
        //}

  options: MapOptions = {
  layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    opacity: 0.7,
    maxZoom: 19,
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })],
    zoom: 10,
    center: latLng(-34.69, -58.321)
  };
  
  public map!: Map;
  public zoom!: number;

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.map.clearAllEventListeners;
    // this.map.remove();
    this.map.off();
  };

  onMapReady(map: Map) {
    new Marker([-34.69, -58.321], {icon: this.markerIcon}).addTo(map);
    new Marker([-34.5860537773849, -58.45226180185607], {icon: this.markerIcon}).addTo(map);
    new Marker([-34.914759, -57.949463], {icon: this.markerIcon}).addTo(map);
    this.map = map;
    // this.map$.emit(map);
    // this.zoom = map.getZoom();
    // this.zoom$.emit(this.zoom);
    
  }
  // ZoomAnimEvent
  // onMapZoomEnd(e: any) {
  //   this.zoom = e.target.getZoom();
  //   this.zoom$.emit(this.zoom);
  // }
}
