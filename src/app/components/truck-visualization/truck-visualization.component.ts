import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-truck-visualization',
  templateUrl: './truck-visualization.component.html',
  styleUrls: ['./truck-visualization.component.css']
})
export class TruckVisualizationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(-1.0948476, 37.0044377),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
