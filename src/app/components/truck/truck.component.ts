import { Itruck } from './../../Models/truck';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {
  trucks: any;

  constructor(public clientService: ClientService) {

   }

  ngOnInit() {
    this.getTrucks();
   }

  getTrucks() {
    this.clientService.getTruckList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(trucks => {
      this.trucks = trucks;
    });
  }

}
